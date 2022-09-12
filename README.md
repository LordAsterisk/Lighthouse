# Lighthouse

https://editor.p5js.org/SRedstone/full/HCCzMgjzq

A small interactive animation of a lighthouse during the day and night. 

I tried to make it look like the moon/sun is reflected in the water.

<img width="298" alt="Lighthouse day" src="https://user-images.githubusercontent.com/47250827/189763062-fc6be52f-14f1-4294-a7d8-ce1823f04aed.png">

Clicking the screen causes the time to switch from day to night, turning the lighthouse on and making stars appear in the sky that twinkle at different speeds.

<img width="285" alt="image" src="https://user-images.githubusercontent.com/47250827/189764384-e4e8d030-8a64-457b-8627-2b605d89ee67.png">

I'd like to improve on how to effectively use the random() function. I wanted to make stars appear randomly in the sky, but using random() for their (x, y) positions in the draw function kept changing their location, rather than randomly choosing a number and sticking with it. I ended up needing to choose their locations manually.
