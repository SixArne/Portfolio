import{_ as a,o as t,c as i,k as e,a as r,R as o}from"./chunks/framework.L_KMPG9f.js";const v=JSON.parse('{"title":"Internship project: The holy grail","description":"","frontmatter":{},"headers":[],"relativePath":"Projects/Unity/TheHolyGrail.md","filePath":"Projects/Unity/TheHolyGrail.md"}'),n={name:"Projects/Unity/TheHolyGrail.md"},l=e("h1",{id:"internship-project-the-holy-grail",tabindex:"-1"},[r("Internship project: The holy grail "),e("a",{class:"header-anchor",href:"#internship-project-the-holy-grail","aria-label":'Permalink to "Internship project: The holy grail"'},"​")],-1),s=e("iframe",{width:"700",height:"315",src:"https://www.youtube.com/embed/IIbKo_oacvk?si=phwT1nKzW8scHa8W",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),h=o('<h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>The Holy Grail was a mixed reality (MR) multiplayer game created for the Gravensteen, a medieval castle in Gent, Belgium, as part of a project for Historische Huizen Gent. The game was developed by our own company, Xarpy, which we formed at the time. It took place in a large 40x10 meter space, with the goal of immersing players in a medieval adventure where they must venture into dungeons to retrieve the Holy Grail.</p><h2 id="game-overview" tabindex="-1">Game Overview: <a class="header-anchor" href="#game-overview" aria-label="Permalink to &quot;Game Overview:&quot;">​</a></h2><p>In The Holy Grail, players and their party are tasked with entering a procedurally generated dungeon beneath the medieval castle to locate and retrieve the Holy Grail. Along the way, players loot chests, battle monsters, dodge traps, and face various challenges in their quest.</p><p>The physical room used for the game was relatively simple, consisting of an empty space with several pillars. Using an algorithm, we randomly generated the dungeon layout by placing fake walls between the pillars, effectively creating a unique dungeon for each playthrough. The dungeon was also virtually darkened to add to the atmosphere, with a torch that the players could pick up to light their way, giving the illusion of visibility in the darkened environment.</p><h2 id="challenges-and-optimization" tabindex="-1">Challenges and Optimization: <a class="header-anchor" href="#challenges-and-optimization" aria-label="Permalink to &quot;Challenges and Optimization:&quot;">​</a></h2><p>While the creative process was incredibly rewarding, the most challenging aspect of the project was optimizing the multiplayer experience and managing the networking complexities of mixed reality. To ensure that all players had the same reference point in the physical and virtual space, we used Netcode for GameObjects and Meta’s Shared Spatial Anchors.</p><p>In typical virtual multiplayer games, this is straightforward, but in mixed reality, players can still see their physical environment and one another. This created the challenge of ensuring that players not only interacted with the virtual environment but also with each other in a way that felt synchronized across the space. If one player was in a different location than the others in the same physical space, the experience would feel disjointed and confusing.</p><p>An additional obstacle arose during production when we learned that Shared Spatial Anchors were only valid for 24 hours. This meant that headsets not updated in time would lose access to the anchor, requiring every headset to re-fetch the anchor. Fortunately, Meta later extended the validity period to 30 days after our project concluded.</p><p>To address this, we developed a custom anchor recovery system. If a headset did not have the required spatial anchor, it would request the anchor from another headset with a local copy. This solution ensured that all devices could sync without requiring a manual setup for every headset. The process took significant time and effort in terms of code design, but the end result was well worth it. We also created a user-friendly system for employees to generate and share anchors themselves, allowing for greater flexibility and ease of operation.</p><h2 id="technical-details" tabindex="-1">Technical Details: <a class="header-anchor" href="#technical-details" aria-label="Permalink to &quot;Technical Details:&quot;">​</a></h2><ul><li>Engine: Unity</li><li>Programming Language: C#</li><li>Platform: Meta Quest 3 (Standalone VR)</li><li>Networking: Netcode for GameObjects</li><li>Backend: Firebase (for saving and sharing spatial anchors)</li></ul><p>This project was a fantastic opportunity to work on cutting-edge mixed reality experiences and to develop a complex multiplayer game for a cultural site. The challenges of synchronizing the physical and virtual worlds were significant, but the experience pushed my skills in both game development and problem-solving to new heights.</p>',13),c=[l,s,h];function d(p,m,u,y,g,f){return t(),i("div",null,c)}const b=a(n,[["render",d]]);export{v as __pageData,b as default};
