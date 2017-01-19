export const defaultAspects = {
  x: 0,
}
const eyeColors = ["#61BFAD", "#167C80", "#32B67A", "#0BBCD6", "#371722", "#CF2F89", "#B6CAC0", "#196A7E"]

export const features = {
  outline: {
  	type: "outline",
  	x: 0,
  	y: 0,
  	points: [
  	  {x: [0, 0], y: [0, 0]},
  	  {x: [6, 10], y: [1, 8]},
  	  {x: [10, 12], y: [9, 16]},
  	  {x: [10, 15], y: [17, 22]},
  	  {x: [3, 12], y: [23, 26]},
  	  {x: [0, 0], y: [25, 27]},
  	],
  	style: "fill",
  	color: "#EC8564",
  },
  worryLineTop: {
    type: "line",
    y: [1, 4],
    width: [0, 4],
    color: "#D26A56",
  },
  worryLineBottom: {
    type: "line",
    y: [3, 5],
    width: [0, 5],
    color: "#D26A56",
  },
  eyebrow: {
    type: "line",
    y: [5, 7],
    width: [4, 8],
    x: [0, 3],
    lineWidth: [0.1, 2.5],
  },
  eyeBackground: {
    type: "rect",
    yRel: {feature: "eyebrow", distance: [0, 3]},
    x: [2, 5.5],
    width: [3, 4],
    height: [1, 3],
    style: "fill",
    color: "#fff",
  },
  eyeTop: {
    type: "line",
    yRel: {feature: "eyeBackground", distance: [0, 0]},
    width: [0, 5],
    xRel: {feature: "eyeBackground", distance: [0, 0]},
  },
  eyeBottom: {
    type: "line",
    yRel: {feature: "eyeTop", distance: [1, 2]},
    xRel: {feature: "eyeTop", distance: [-0.3, 0.3]},
    width: [0, 5],
  },
  pupil: {
    type: "circle",
    yRel: {feature: "eyeTop", distance: [0, 1]},
    xRel: {feature: "eyeBackground", distance: [-0.2, 0.2]},
    r: [0.7, 1.2],
    style: "fill",
    color: eyeColors,
    mirrored: "eyeBackground",
  },
  noseBridge: {
  	type: "rect",
  	yRel: {feature: "eyebrow", distance: [2, 5]},
  	width: [0.3, 3],
  	height: [5, 10],
  	style: "fill",
  	color: "#C44812"
  },
  nose: {
  	type: "circle",
  	yRel: {feature: "noseBridge", distance: [-4, -2], end: true},
  	xRel: {feature: "noseBridge", distance: [-2, 2], end: true},
  	r: [1, 2.2],
  	style: "fill",
  	color: "#C44812"
  },
  mouth: {
  	type: "line",
  	yRel: {feature: "nose", distance: [3, 10]},
  	width: [2, 6],
  },
  // nostrilSize: [0, 3],
  // mouthAbove: [0, 3],
  // mouthHeight: [1, 3],
  // mouthWidth: [3, 9],
  // earHeight: [1, 7],
  // earWidth: [2, 4],
  // outlineTopWidth: [8, 15],
  // outlineTempleWidth: [8, 15],
  // outlineCheekWidth: [8, 15],
  // outlineJawWidth: [8, 15],
  // outlineNeckHeight: [1, 10],
  // outlineNeckWidth: [2, 7],
}