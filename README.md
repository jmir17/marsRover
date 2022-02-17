# Mars Rover Kata

Write a program that takes a set of orders as string (`"MMRMMLM"`) representing the movements a rover has to perform, at the end it returns the last position and the direction.

Commands: 
> `M` to move forward

> `R` to turn right

> `L` to turn left

Considerations:
* The rover always start at 0,0 facing North
* When it reaches the map limit, it wraps around
* The default map size is 10x10

Extra: A map could contain obstacles, in that case report las position reached and inform that the rover is blocked


Example results:
```
MM >> 0, 2, N
RMMMMLMML >> 4, 2, E 
RMMMMLMML >> 0, 0, E, Blocked! 
```

To run the tests, execute:  
`npm i` to install the depencencies and then  
`npm run test` to run the tests
