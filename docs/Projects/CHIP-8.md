# CHIP-8 Emulator

I've always wanted to write an emulator for older games, and the easiest to start with is the famous CHIP-8.

## What is emulation?

Emulation is interpreting the original game code for a specific system and recreating the system's hardware in code. This allows us to run older games on newer hardware 
and it's a way to keep the nostalgia of the old era alive. After all, the entire roots of the field I now study once started with these simple games.

## How does emulation work

Every binary executable is a collection of machine instructions for the CPU, the programs we run today work in the same way, we write some simple code
and that gets compiled down to instructions, typically part of an instruction set which the CPU then executes.

Emulation is writing software that can interpret these instructions in the exact same way as the original device, so to make an emulator you have to do the following things:

<br><br/>
- Implement virtual components that can act just like the original hardware.
- Implementing the instruction set.
<br><br/>

::: info
For the CHIP-8 The instruction set is limited, but the more modern a device is the more instructions it has, the original gameboy had an instruction set
of over 500 instructions.
:::

## The adventures of low-level programming

For this project I've decided to use C++ and SDL, the original videos/documentation I followed were implemented using the C Language, but I as my main language is C++ This seemed more
straight forward.

## The art of reading documentation.

As I have never used SDL myself or written anything low level this would also be the first project where I couldn't simply rely on intellisense to help me out.
This meant that I would have to find written documentation on the inner workings of the CHIP-8 hardware.

Luckily the older a system is the more documentation you can find, especially on the classical CHIP-8 that is considered as the `Hello world` example of
emulation.

## Source code

- [Github](https://github.com/SixArne/CHIP-8)