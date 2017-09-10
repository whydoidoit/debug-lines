### Introduction

Draws debug lines (with duration if required), either between two points or in a direction

### Installation

```language-shell
npm install --save playcanvas-debug-lines
```

### Usage

```language-javascript
import debugLine from 'playcanvas-debug-lines'

...

debugLine(this.entity.getPosition(), this.entity.forward, 8, 0.4, pc.LINEBATCH_OVERLAY);
debugLine(this.entity.getPosition(), this.entity.up, 4);
debugLine(this.entity.getPosition(), this.otherEntity.getPosition(), null, 0.4);

```

### Parameters

`debugLine(start, endOrDirection, [lengthIfDirection], [duration], [overlay])`

`start` the start position of the line

`endOrDirection` either the end point if `lengthIfDirection` is null or a direction vector

`lengthIfDirection` the length of the line if it is heading in a direction

`duration` the time in seconds that the line should be drawn for. If omitted it is drawn for a single frame.

`overlay` standard line batches to indicate if the line should go on top of other geometry

### Requirements

Uses ES6/Babel/PlayCanvas template. PlayCanvas Engine on the page.
