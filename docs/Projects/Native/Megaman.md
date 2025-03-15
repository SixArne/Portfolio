# [Megaman](https://github.com/SixArne/MegamanGravityMan)

<iframe width="560" height="315" src="https://www.youtube.com/embed/QvDNU9sUAqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

For our programming 2 end assignment we had to create a level of a traditional video-game.
I chose to create Megaman 5's GravityMan level for 2 main reasons.

- The camera system.
- The gravity changes in the level.

Because this was the first big assignment I knew I couldn't handle it like a small project, so I used git as a version management system and made some helpful classes.


::: info
We also had the option of making an extra feature, so I've decided to make a custom level file where you could specify the collision map, enemies, powerups and sprites. At runtime it would only include the assets it needed for that level.
:::

## Animator

The Animator was responsible for switching between states and animations, otherwise I would have to code a lot
of exceptions to make sure that he is in the right state and riht animation.

The animator is in essence a trimmed down version of a Finite State Machine.

```cpp
...
class Animator final
{
public:
	Animator(...);
	Animator& operator=(const Animator& other) = delete;
	Animator(const Animator& other) = delete;
	~Animator();

	void Update(float deltaTime);
	void Draw() const;
	void SetParameter(std::string name, int value);
	int GetParameter(const std::string);
	...

private:
	// States we can switch between
	std::unordered_map<int, AnimatorState*> m_States;

	// Transitions from and to states
	std::set<AnimatorTransition*> m_Transitions;

	// Parameters to switch on
	std::unordered_map<std::string, int> m_Parameters;

    ...

	void SetState(int name);
};
```

Now I could pass the states and their conditions, this animator was also resposible for rendering so I gave it the
cached level textures.

```cpp
const std::unordered_map<int, AnimatorState*> states = {
    {RunEnum, new MegamanRunState{textureManager->GetLevelTexture(TextureType::MegamanWalk)}},
    {IdleEnum, new MegamanIdleState{textureManager->GetLevelTexture(TextureType::MegamanIdle)}},
    {JumpEnum, new MegamanJumpState{textureManager->GetLevelTexture(TextureType::MegamanJump)}},
    {RunShootEnum, new MegamanShootRunState{textureManager->GetLevelTexture(TextureType::MegamanShootWalk)}},
    {IdleShootEnum, new MegamanShootIdleState{textureManager->GetLevelTexture(TextureType::MegamanShootIdle)}},
    {JumpShootEnum, new MegamanShootJumpState{textureManager->GetLevelTexture(TextureType::MegamanShootJump)}},
    {TeleportEnum, new MegamanTeleportState{textureManager->GetLevelTexture(TextureType::MegamanTeleport)}},
};

const std::set<AnimatorTransition*> transitions = {
		new ConditionalTransition{IdleEnum, RunEnum, std::map<std::string, int>{
			{"pressingMove", 1}
		}},
		new ConditionalTransition{RunEnum, IdleEnum, std::map<std::string, int>{
			{"pressingMove", 0}
		}},

		new ConditionalTransition{IdleEnum, IdleShootEnum, std::map<std::string, int>{
			{"isShooting", 1},
			{"pressingMove", 0}
		}},
}

```

## Collision

Next issue was detecting collisions between different objects, so the most straightforward solution was to 
make a base class GameObject and have a PhysicsHandler that would call their virtual OnCollisionStart, Update and End functions.


```cpp
void PhysicsHandler::Update(float deltaTime)
{
	for (GameObject* currentObject : m_GameObjects)
	{
		...

		for (GameObject* otherObject : m_GameObjects)
		{
			...

			if (collidingLastFrame && currentlyColliding)
			{
				currentObject->OnCollisionUpdate(otherObject, deltaTime);
			}
			else if (currentlyColliding && !collidingLastFrame)
			{
				currentObject->OnCollisionEnter(otherObject);
			}
			else if (!currentlyColliding && collidingLastFrame)
			{
 				currentObject->OnCollisionEnd(otherObject);
			}

			...
		}
	}
}
```

And now objects will be notified if they collide.

```cpp
void Nobuta::OnCollisionEnter(GameObject* other)
{
	if (other->GetTag() == CollisionType::Character)
	{
		std::cout << "Hit megaman" << std::endl;
	}
}
```

## [Github](https://www.youtube.com/watch?v=AzYJ3G4c-z0)