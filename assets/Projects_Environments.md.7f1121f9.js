import{_ as o,o as a,c as i,a as s,d as e,e as t}from"./app.75468230.js";const n="/Portfolio/environments_end.gif",r="/Portfolio/environment_blockout.png",l="/Portfolio/environments_update_1.png",d="/Portfolio/environments_update_2.png",c="/Portfolio/environments_update_3.png",h="/Portfolio/environments_update_4.png",u="/Portfolio/environments_update_4.5.png",T=JSON.parse('{"title":"Environments","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Feedback","slug":"feedback","link":"#feedback","children":[]},{"level":2,"title":"Progress","slug":"progress","link":"#progress","children":[]},{"level":2,"title":"End results","slug":"end-results","link":"#end-results","children":[{"level":3,"title":"Gameplay video","slug":"gameplay-video","link":"#gameplay-video","children":[]},{"level":3,"title":"Cinematic Video","slug":"cinematic-video","link":"#cinematic-video","children":[]}]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]}],"relativePath":"Projects/Environments.md"}'),p={name:"Projects/Environments.md"},m=s('<h1 id="environments" tabindex="-1">Environments <a class="header-anchor" href="#environments" aria-hidden="true">#</a></h1><p><img src="'+n+'" alt="final result"></p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>In the 1st semester of the 2nd year, we had another 3D-related subject called environments, for this assignment we had to create a modular asset pack and make a big level in Unreal Engine 5. The result was a full 3D level with small interactions.</p><p>For the first part, we had to start with making a blockout for a corridor or a small room. I&#39;ve decided to go for a small room, my end idea was to make an ominous factory.</p><h2 id="feedback" tabindex="-1">Feedback <a class="header-anchor" href="#feedback" aria-hidden="true">#</a></h2><p>Every week we got feedback on our scenes from our talented teachers, and the biggest piece of advice I still remember is this wonderful phrase: &quot;Slap shit on walls&quot;. It sounds funny when you read it but it was genuine advice, an empty wall looks boring in the end.</p><p>So I will note down any feedback I got with this format</p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>This is the feedback</p></div><h2 id="progress" tabindex="-1">Progress <a class="header-anchor" href="#progress" aria-hidden="true">#</a></h2><p>So naturally, my first step was to create a block out for my scene, as stated before I wanted to go for a factory/industrial-like scene, first, we had to create a block out of the level, I went through a few iterations but decided to stick with the following block out to start with.</p><p><img src="'+r+'" alt="environments blockout"></p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>&quot;It&#39;s no use to put geometry on the floor as normal maps will take care of that, and I want you to do something with that big open gap.&quot;</p><p>&quot;Also please remove the &#39;Radioactive stuff&#39; While It&#39;s true that unreal 5 supports lighting through emissive materials I wouldn&#39;t advise only lighting your scene with those.&quot;</p></div><p>After making the block out the trick was to gradually add more props and make a more interesting scene overall. I&#39;ve decided to expand the big black gap to give it a more interesting vibe... A mysterious air shaft.</p><p>And after adding some more props and filing my scene it started to look like this:</p><p><img src="'+l+'" alt="environments blockout"></p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>It&#39;s nice that you have some boxes but don&#39;t over use them just to fill your scene, the vent is a nice feature that draws the player&#39;s attention.</p><p>I would look into your lighting settings, you have some smearing going on there.</p></div><p>At this point, my assets weren&#39;t that grid-based yet, and the models themselves were rather basic, so my next step involved upgrading my basic meshes to something more sophisticated.</p><p><img src="'+d+'" alt="environments blockout"></p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>Currently, the lighting is coming out of nowhere, make sure that the lights themselves are placed logically, also try to already use trim textures in your scene.</p></div><p>Now that my models look a bit better it was time to texture them, initially I had this ladder to go down to the mysterious airshaft, but I decided to scratch that idea and go for a staircase instead which meant... My scene needed to become bigger.</p><p><img src="'+c+'" alt="environments blockout"></p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>I like what you have done with your panel textures, the floor aso looks interesting but might have to change later on.</p><p>Personally I am not a big fan of detailing your pipes with trim textures, just a normal scratched paint texture will make this a lot better.</p><p>Finally: Please do get rid of those white beams.</p></div><p>Now, I was already planning to get rid of those beams but after hearing about the wall panels I decided to make some new ones that would fit it better, and I decided to reduce the amount of pipes in my scene.</p><p>Now at this point I already changed most of the critique points and asked feedback from my &quot;Game mechanics&quot; teachers who have experience releasing their own game called Tri-Fox. And I got some extra feedback from them as wel.</p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>Disable Unreal&#39;s exposure settings and exposure bias, make sure that your scene is using the same values ingame as in the editor.</p><p>I see you have a lot of lights but it&#39;s too much, if you are going for this scary scene you should have some dark pockets in between the lights. Look into the construction script for your lights, that allows you to set the emmisive and light color in 1 setting.</p><p>Also you have these hard transitions in your walls with the ceiling, those look unrealistic, cover them up with another mash to actually cover up the transitions.</p></div><p>And finally, they told me about some post-processing and exponential fog, and after enabling all of that this was the result.</p><p><img src="'+h+'" alt="environments blockout"></p><p>However that floor took me too long to make, I had to make 11 different floor pieces to make sure it fitted, and even then there were still noticible mistakes. So I just decided to redo my floor and texture the final pieces before the next feedback session arrived.</p><p><img src="'+u+'" alt="environments blockout"></p><div class="danger custom-block"><p class="custom-block-title">FEEDBACK</p><p>The theme is a lot clearer now but you flipped the balance a bit. The walls could use a bit more depth and noise and the pillars a bit less. The floor also needs a bit more variation. The pipe needs a texture to make it fit a bit better into your scene.</p><p>And you lose a lot of visibility in the ceiling, making it a bit lighter.</p></div><h2 id="end-results" tabindex="-1">End results <a class="header-anchor" href="#end-results" aria-hidden="true">#</a></h2><h3 id="gameplay-video" tabindex="-1">Gameplay video <a class="header-anchor" href="#gameplay-video" aria-hidden="true">#</a></h3>',33),g=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ucF97maQ2xo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),b=e("h3",{id:"cinematic-video",tabindex:"-1"},[t("Cinematic Video "),e("a",{class:"header-anchor",href:"#cinematic-video","aria-hidden":"true"},"#")],-1),f=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZhSA4JnORIA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),v=e("h2",{id:"github",tabindex:"-1"},[e("a",{href:"https://github.com/SixArne/Environ",target:"_blank",rel:"noreferrer"},"Github"),t(),e("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#")],-1),k=[m,g,b,f,v];function w(y,_,I,x,E,A){return a(),i("div",null,k)}const F=o(p,[["render",w]]);export{T as __pageData,F as default};
