# Vulkan rasterizer

Starting from the 2nd year I started to have in interest in graphics programming, this lead me to
search for API's to learn. Because we already learned DirectX11 in DAE I've decided to go and learn
the Vulkan API by Khronos.

For those that don't know: Vulkan is also known as the next generation of OpenGL, where the Khronos group
decided to give the developers full control of the API. This makes Vulkan very configurable but also hard to learn, hence
I've decided to start my journey and this is the result.

## The first 1000 lines

As this is the first Graphical API I learned I made sure to buy a course on Udemy going over creating the entire pipeline from scratch which to be honest:
It is really... really testing my patience. Currently I have been watching more than 10 hours on how to render a triangle and I am almost there.
Just 2-3 more hours to go T-T

On the bright side: this course explains Vulkan in depth, which im takefull for. I hate people who make tutorials and make you copy huge chunks of code!
But in Vulkan's case I was starting to see why they did it.

::: details Example setting up the graphics pipeline in Vulkan
```cpp
// Read in SPIR-V code of shaders
	auto vertexShaderCode = readFile("Shaders/vert.spv");
	auto fragmentShaderCode = readFile("Shaders/frag.spv");

	// Build shader modules to link to graphics pipeline
	VkShaderModule vertexShaderModule = CreateShaderModule(vertexShaderCode);
	VkShaderModule fragmentShaderModule = CreateShaderModule(fragmentShaderCode);

	// -- SHADER STAGE CREATION INFORMATION ---
	// Vertex stage creation information
	VkPipelineShaderStageCreateInfo vertexShaderCreateInfo{};
	vertexShaderCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
	vertexShaderCreateInfo.stage = VK_SHADER_STAGE_VERTEX_BIT; // Shader stage type
	vertexShaderCreateInfo.module = vertexShaderModule; // Module to be used
	vertexShaderCreateInfo.pName = "main"; // function to run in shader file

	// Fragment stage creation information
	VkPipelineShaderStageCreateInfo fragmentShaderCreateInfo{};
	fragmentShaderCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
	fragmentShaderCreateInfo.stage = VK_SHADER_STAGE_FRAGMENT_BIT;
	fragmentShaderCreateInfo.module = fragmentShaderModule;
	fragmentShaderCreateInfo.pName = "main";

	VkPipelineShaderStageCreateInfo shaderStages[] = { vertexShaderCreateInfo, fragmentShaderCreateInfo };

	// -- VERTEX INPUT --
	VkPipelineVertexInputStateCreateInfo vertexInputCreateInfo{};
	vertexInputCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_VERTEX_INPUT_STATE_CREATE_INFO;
	vertexInputCreateInfo.vertexBindingDescriptionCount = 0;
	vertexInputCreateInfo.pVertexBindingDescriptions = nullptr;							// List of vertex binding descriptions (data spacing/stride information)
	vertexInputCreateInfo.vertexAttributeDescriptionCount = 0;
	vertexInputCreateInfo.pVertexAttributeDescriptions = nullptr;						// List of vertex attribute descriptions (data format and where to bind to/from)

	// -- INPUT ASSEMBLY --
	VkPipelineInputAssemblyStateCreateInfo inputAssemblyCreateInfo{};
	inputAssemblyCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_INPUT_ASSEMBLY_STATE_CREATE_INFO;
	inputAssemblyCreateInfo.topology = VK_PRIMITIVE_TOPOLOGY_TRIANGLE_LIST;						// Primitive type to assemble vertices as
	inputAssemblyCreateInfo.primitiveRestartEnable = VK_FALSE;									// Allow overriding of "strip" topology to start new primitives

	// -- VIEWPORT & SCISSOR --
	// Create a viewport info struct
	VkViewport viewport{};
	viewport.x = 0.0f;
	viewport.y = 0.0f;
	viewport.width = (float)m_SwapchainExtent.width;
	viewport.height = (float)m_SwapchainExtent.height;
	viewport.minDepth = 0.0f;
	viewport.maxDepth = 1.0f;

	// Create a scissor info struct
	VkRect2D scissor{};
	scissor.offset = { 0,0 };		// Offset to use region from
	scissor.extent = m_SwapchainExtent;		// Extent to describe region to use

	VkPipelineViewportStateCreateInfo viewportStateCreateInfo{};
	viewportStateCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_VIEWPORT_STATE_CREATE_INFO;
	viewportStateCreateInfo.viewportCount = 1;
	viewportStateCreateInfo.pViewports = &viewport;
	viewportStateCreateInfo.scissorCount = 1;
	viewportStateCreateInfo.pScissors = &scissor;

	// -- DYNAMIC STATES --
	// Dynamic states to enable (to avoid baked in values)
	//std::vector<VkDynamicState> dynamicStateEnables{};
	//dynamicStateEnables.push_back(VK_DYNAMIC_STATE_VIEWPORT);	// Dynamic viewport, resize in command buffer with vkCmdSetViewport(commandBuffer, 0, 1, &viewport)
	//dynamicStateEnables.push_back(VK_DYNAMIC_STATE_SCISSOR);	// Dynamic scissor, resize in command buffer with vkCmdSetScissor(commandBuffer, 0, 1, &scissor)

	//// Dynamic state creation info
	//VkPipelineDynamicStateCreateInfo dynamicStateCreateInfo{};
	//dynamicStateCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_DYNAMIC_STATE_CREATE_INFO;
	//dynamicStateCreateInfo.dynamicStateCount = static_cast<uint32_t>(dynamicStateEnables.size());
	//dynamicStateCreateInfo.pDynamicStates = dynamicStateEnables.data();

	// -- RASTERIZER --
	VkPipelineRasterizationStateCreateInfo rasterizerCreateInfo{};
	rasterizerCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_RASTERIZATION_STATE_CREATE_INFO;
	rasterizerCreateInfo.depthClampEnable = VK_FALSE;			// Change if fragments beyond near/far plane are clipped or clamped to plane (need to enable device feature for this)
	rasterizerCreateInfo.rasterizerDiscardEnable = VK_FALSE;	// Discard data and skip. Used for data without rendering (Leave to false)

	rasterizerCreateInfo.polygonMode = VK_POLYGON_MODE_FILL;	// How to handle polygon rendering. (fill will consider all points within polygon as fragment/pixels. line is handy for wire frames)
																// other needs GPU features

	rasterizerCreateInfo.lineWidth = 1.0f;						// Any value other that 1 needs GPU feature
	rasterizerCreateInfo.cullMode = VK_CULL_MODE_BACK_BIT;		// Don't render back side.
	rasterizerCreateInfo.frontFace = VK_FRONT_FACE_CLOCKWISE;	// Which side is front
	rasterizerCreateInfo.depthBiasEnable = VK_FALSE;			// Whether to add depth bias to fragments (good for stopping "Shadow acne" in shadow mapping)

	// -- MULTISAMPLING --
	VkPipelineMultisampleStateCreateInfo multiSamplingCreateInfo{};
	multiSamplingCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_MULTISAMPLE_STATE_CREATE_INFO;
	multiSamplingCreateInfo.sampleShadingEnable = VK_FALSE;					// Enable multi sampling shading or not
	multiSamplingCreateInfo.rasterizationSamples = VK_SAMPLE_COUNT_1_BIT;	// Number of samples to use per fragment

	// -- BLENDING --
	// Blending decides how to blend a new color being written to a fragment, with the old value

	// Blend attachment state => how blending is handled
	VkPipelineColorBlendAttachmentState colorState{};
	colorState.colorWriteMask = VK_COLOR_COMPONENT_R_BIT | VK_COLOR_COMPONENT_G_BIT
		| VK_COLOR_COMPONENT_B_BIT | VK_COLOR_COMPONENT_A_BIT;  // Colors to apply blending to
	colorState.blendEnable = VK_TRUE;							// Enable blending

	// Blending uses the follow equation: (srcColorBlendFactor * new color) colorBlendOp (destColorBlendFactor * old color)
	colorState.srcColorBlendFactor = VK_BLEND_FACTOR_SRC_ALPHA;
	colorState.dstColorBlendFactor = VK_BLEND_FACTOR_ONE_MINUS_SRC_ALPHA;
	colorState.colorBlendOp = VK_BLEND_OP_ADD;

	// Summarised: (VK_BLEND_FACTOR_SRC_ALPHA * new color) + (VK_BLEND_FACTOR_ONE_MINUS_SRC_ALPHA * old color)
	//			   ( new color alpha * new color) + ((1- new color alpha) * old color)

	colorState.srcAlphaBlendFactor = VK_BLEND_FACTOR_ONE;
	colorState.dstAlphaBlendFactor = VK_BLEND_FACTOR_ZERO;
	colorState.alphaBlendOp = VK_BLEND_OP_ADD;
	// Summarised: (1 * new alpha) + (0 * old alpha) = new alpha

	VkPipelineColorBlendStateCreateInfo colorBlendingCreateInfo{};
	colorBlendingCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_COLOR_BLEND_STATE_CREATE_INFO;
	colorBlendingCreateInfo.logicOpEnable = VK_FALSE;			// Alternative to calculations is to use logical operations.
	//colorBlendingCreateInfo.logicOp = VK_LOGIC_OP_COPY;
	colorBlendingCreateInfo.attachmentCount = 1;
	colorBlendingCreateInfo.pAttachments = &colorState;
	
	// -- PIPELINE LAYOUT (TODO: apply future descriptor set layouts)
	VkPipelineLayoutCreateInfo pipelineLayoutCreateInfo{};
	pipelineLayoutCreateInfo.sType = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
	pipelineLayoutCreateInfo.setLayoutCount = 0;
	pipelineLayoutCreateInfo.pSetLayouts = nullptr;
	pipelineLayoutCreateInfo.pushConstantRangeCount = 0;
	pipelineLayoutCreateInfo.pPushConstantRanges = nullptr;

	// Create Pipeline layout
	VkResult result = vkCreatePipelineLayout(m_MainDevice.logicalDevice, &pipelineLayoutCreateInfo, nullptr, &m_PipelineLayout);
	if (result != VK_SUCCESS)
	{
		throw std::runtime_error("Failed to create pipeline layout");
	}

	// -- Depth stencil testing
	// TODO: Set up depth stencil testing

	// -- Graphics pipeline creation
	VkGraphicsPipelineCreateInfo pipelineCreateInfo{};
	pipelineCreateInfo.sType = VK_STRUCTURE_TYPE_GRAPHICS_PIPELINE_CREATE_INFO;
	pipelineCreateInfo.stageCount = 2;										// Number of shader stages
	pipelineCreateInfo.pStages = shaderStages;								// List of shader stages
	pipelineCreateInfo.pVertexInputState = &vertexInputCreateInfo;          // All the fixed function pipeline states
	pipelineCreateInfo.pInputAssemblyState = &inputAssemblyCreateInfo;
	pipelineCreateInfo.pViewportState = &viewportStateCreateInfo;
	pipelineCreateInfo.pDynamicState = nullptr;
	pipelineCreateInfo.pRasterizationState = &rasterizerCreateInfo;
	pipelineCreateInfo.pMultisampleState = &multiSamplingCreateInfo;
	pipelineCreateInfo.pColorBlendState = &colorBlendingCreateInfo;
	pipelineCreateInfo.pDepthStencilState = nullptr;
	pipelineCreateInfo.layout = m_PipelineLayout;							// Pipeline layout to be used
	pipelineCreateInfo.renderPass = m_RenderPass;							// Render pass description the pipeline is compatible with
	pipelineCreateInfo.subpass = 0;											// Subpass of render pass to use with pipeline

	// Pipeline derivatives: can create multiple pipelines that derive from one another for optimization
	pipelineCreateInfo.basePipelineHandle = VK_NULL_HANDLE;					// Existing pipeline to derive from
	pipelineCreateInfo.basePipelineIndex = -1;								// or index of pipeline being create to derive from (if making multiple)

	// Create graphics pipeline
	result = vkCreateGraphicsPipelines(m_MainDevice.logicalDevice, VK_NULL_HANDLE, 1, &pipelineCreateInfo, nullptr, &m_GraphicsPipeline);
	if (result != VK_SUCCESS)
	{
		throw std::runtime_error("Failed to create graphics pipelines");
	}

	// CREATE PIPELINE (once we create pipeline we can destroy here)
	vkDestroyShaderModule(m_MainDevice.logicalDevice, fragmentShaderModule, nullptr);
	vkDestroyShaderModule(m_MainDevice.logicalDevice, vertexShaderModule, nullptr);
```
:::

::: danger Realisation
and that.... was just the pipeline alone...
:::
