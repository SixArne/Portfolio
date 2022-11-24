# Theory concepts that you must know

When you create a vulkan application there are always some repetitive tasks that you have to do. Usually vulkan has 3 repetitive tasks:

- Querying information from the GPU
- Creating "Create info" structs
- Destroying these structs


Generally when you call a function like  ` vkCreate... `  you as the developer have the obligation to also destroy these created structs. There are also times were you just queue some information, getting info from the API does not require manual destruction.

::: details EXAMPLE MANUAL CLEANUP
```cpp
class VulkanApplication
{
public:
    VulkanApplication()
    {
        VkInstanceCreateInfo createInfo{};
        createInfo.sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;
        createInfo.pApplicationInfo = &appInfo;
        ...

        VkResult result = vkCreateInstance(&createInfo, nullptr, &m_Instance);
    }

    ~VulkanApplication()
    {
        vkDestroyInstance(m_Instance, nullptr);
    }
private:
    VkInstance m_Instance{};
}
```
:::

## VkInstance

Every vulkan application starts with creating an instance which describes your application and the extensions that it will be using. Here you can define things like an application and/or engine version.

## VkPhysicalDevice

The physical device is your computer's vulkan compatible graphics card, preferably you would chose a graphics card that supports as many features as possible. You can request all information and capabilities of your graphics card.

::: tip
We don't create a Physical device, we only ask vulkan to retrieve it for us. So this is one action that doesn't require manual cleanup.
:::

## VkDevice

The device or better known as the logical device is used to interface with the physical device, most functions that interact with the GPU will need a reference to this logical device. When creating a logical device we also need to see what type's of queue's are available on the card, as these are important for our feature-set.

### Queue types

An application will submit the data to a VkQueue in the form of `VkCommandBuffer` objects or sparse bindings.

There are numerous operations that a `VkQueue` can support. A Queue family describes a set of VkQueue's that have common properties and support the same functionality, as advertised in `VkQueueFamilyProperties`.

### Graphics VkQueue 
Uses the `VK_QUEUE_GRAPHICS_BIT` for `vkCmdDraw*` and the graphic pipeline commands.

### Compute VkQueue

Uses the `VK_QUEUE_COMPUTE_BIT` for `vkCmdDispatch*` and `vkCmdTraceRays*` and compute pipeline related commands.

### Transfer VkQueue

Uses the `VK_QUEUE_TRANSFER_BIT` for all transfer commands

::: info
Queue Families with only `VK_QUEUE_TRANSFER_BIT` are usually for using DMA to asynchronously transfer data between host and device memory on discrete GPUs, so transfers can be done concurrently with independent graphics/compute operations.

`VK_QUEUE_GRAPHICS_BIT` and `VK_QUEUE_COMPUTE_BIT` can always implicitly accept `VK_QUEUE_TRANSFER_BIT` commands.
:::

### Sparse VkQueue

`VK_QUEUE_SPARSE_BINDING_BIT` can be used for binding [spare resources](https://github.com/KhronosGroup/Vulkan-Guide/blob/master/chapters/sparse_resources.adoc#sparse-resources) to memory with the `vkQueueBindSparse` command

### Protected VkQueue

`VK_QUEUE_PROTECTED_BIT` used for protected memory.

### Video Decode/Encode VkQueue

`VK_QUEUE_VIDEO_DECODE_BIT_KHR` and `VK_QUEUE_VIDEO_ENCODE_BIT_KHR` used with Vulkan Video.

## Window Surface

## Swapchain

## Image views and framebuggers

## Render passes

## Graphics pipeline

## Command pools and command buffers


## Sources
- [Queues](https://github.com/KhronosGroup/Vulkan-Guide/blob/master/chapters/queues.adoc)