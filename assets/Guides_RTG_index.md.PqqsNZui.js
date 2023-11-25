import{_ as s,o as i,c as n,R as a,a5 as e}from"./chunks/framework.jbfEQ-Ah.js";const t="/Portfolio/assets/point-direction.py7NrdrO.png",l="/Portfolio/assets/point-indices.FT5rP4BP.png",p="/Portfolio/assets/points-triangle.vbphOIq6.png",h="/Portfolio/assets/triangles.Fct8GhnP.png",x=JSON.parse('{"title":"Runtime Terrain Generation","description":"","frontmatter":{"next":{"text":"Height","link":"/Guides/RTG/height.md"}},"headers":[],"relativePath":"Guides/RTG/index.md","filePath":"Guides/RTG/index.md"}'),r={name:"Guides/RTG/index.md"},k=a(`<h1 id="runtime-terrain-generation" tabindex="-1">Runtime Terrain Generation <a class="header-anchor" href="#runtime-terrain-generation" aria-label="Permalink to &quot;Runtime Terrain Generation&quot;">​</a></h1><h2 id="drawing-the-vertices" tabindex="-1">Drawing the vertices <a class="header-anchor" href="#drawing-the-vertices" aria-label="Permalink to &quot;Drawing the vertices&quot;">​</a></h2><p>Before we get started it is important to realise how a 3D mesh is build in the first place. You have Vertices and Triangles. The Vertices (singular Vertex) is just a 3D point. You need a total of 3 vertices to create a triangle.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The order of these vertices is important!</p></div><p>Lets first discuss on how to generate these individual points. By using a double for loop we can create the points in the X and Y direction.</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xVertexCount{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yVertexCount{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cellSize{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FVector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vertices{};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FVector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> triangles{};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentYIndex{}; currentYIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yVertexCount; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yVertexCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentXIndex{}; currentXIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xVertexCount; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xVertexCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        FVector vertex{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            currentXIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cellSize,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            currentYIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cellSize,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // y</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         // z</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        vertices.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vertex);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // display point</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="`+e+'" alt="points"></p><h2 id="creating-the-triangles" tabindex="-1">Creating the triangles <a class="header-anchor" href="#creating-the-triangles" aria-label="Permalink to &quot;Creating the triangles&quot;">​</a></h2><p>Now that we have these points we want to start creating triangles. But lets go over the creation order first.</p><p><img src="'+t+'" alt="points"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>First it creates the X row and then it jumps 1 Y Column</p></div><p>Now lets look and the index and winding order of a triangle in this example. <code>Note that from now on we will treat this as a 1D array</code></p><p><img src="'+l+`" alt="points"></p><p>Looking closer we can deduce that we need 3 points. [0, 5, 1] to make a triangle, again: <code>ORDER IS IMPORTANT</code> it needs to be <code>counter clockwise</code>. We can deduce the following result from this.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>point 1 is always the current point.</li><li>point 2 is always the current point + xVertexCount.</li><li>point 3 is always the current point + 1.</li></ul></div><p>But, if we were to execute this it would also go over the most right column of points and the top row. We don&#39;t want that as this would not work. So we need to exclude these points from the algorithm.</p><p>A simple way to exclude these is to loop over again but stop 1 index sooner in the width and height.</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentYIndex{}; currentYIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yVertexCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yVertexCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentXIndex{}; currentXIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xVertexCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xVertexCount)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        uint32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current1DIndex{currentYIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xVertexCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currentXIndex};</span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        triangles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(current1DIndex);</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        triangles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(current1DIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xVertexCount);</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        triangles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(current1DIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // display point</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Add vertices and triangles to Procedural mesh.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="`+p+'" alt="points"></p><p>Now the only thing left to do is to fill in the gaps. It&#39;s the same principle with the other points.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>point 1 is always the current point.</li><li>point 2 is always the current point + xVertexCount.</li><li>point 3 is always the current point + 1.</li><li>point 4 is always the current point + 1.</li><li>point 5 is always the current point + xVertexCount.</li><li>point 5 is always the current point + xVertexCount + 1.</li></ul></div><p>When we change the code now taking the new points into account we get this.</p><p><img src="'+h+'" alt="points"></p><p>Now we can change our parameters and see the result!</p>',24),d=[k];function o(c,E,g,u,y,b){return i(),n("div",null,d)}const F=s(r,[["render",o]]);export{x as __pageData,F as default};
