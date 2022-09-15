let noize = 0.25,
	step = 10,
	rectSize = 30,
	strWeight = 1,
	grid = 10;

function preload() {
	img = loadImage("bg.png");
}

function setup() {
	createCanvas(windowHeight, windowHeight);

	//noLoop();
	rectMode(CENTER);
	strokeJoin(ROUND);
	frameRate(4);

}

function draw() {
	image(img, 0, 0, width, height);
	//translate(rectSize * 2, rectSize * 2);
	translate(width / grid * (rectSize / 30), height / grid * (rectSize / 30));
	push();

	for (i = 0; i < grid; i++) {
		for (k = 0; k < grid; k++) {
			createRect(i, k, rectSize, rectSize);
		}
	}
	pop();
}

function createRect(x, y, a, b) {

	push();
	let indent = rectSize + step / 2;
	translate(indent * x * 2, indent * y * 2);
	fill(0, 0);
	stroke(255);
	strokeWeight(strWeight);

	//first rect
	beginShape();
	vertex(-rectSize + curvatureRect(rectSize), -rectSize + curvatureRect(rectSize));
	vertex(rectSize + curvatureRect(rectSize), -rectSize + curvatureRect(rectSize));
	vertex(rectSize + curvatureRect(rectSize), rectSize + curvatureRect(rectSize));
	vertex(-rectSize + curvatureRect(rectSize), rectSize + curvatureRect(rectSize));
	endShape(CLOSE);

	//second rect
	let rectSize2 = rectSize - 10;
	beginShape();
	vertex(-rectSize2 + curvatureRect(rectSize2), -rectSize2 + curvatureRect(rectSize2));
	vertex(rectSize2 + curvatureRect(rectSize2), -rectSize2 + curvatureRect(rectSize2));
	vertex(rectSize2 + curvatureRect(rectSize2), rectSize2 + curvatureRect(rectSize2));
	vertex(-rectSize2 + curvatureRect(rectSize2), rectSize2 + curvatureRect(rectSize2));
	endShape(CLOSE);

	//third rect
	let rectSize3 = rectSize2 - 10;
	beginShape();
	vertex(-rectSize3 + curvatureRect(rectSize3), -rectSize3 + curvatureRect(rectSize3));
	vertex(rectSize3 + curvatureRect(rectSize3), -rectSize3 + curvatureRect(rectSize3));
	vertex(rectSize3 + curvatureRect(rectSize3), rectSize3 + curvatureRect(rectSize3));
	vertex(-rectSize3 + curvatureRect(rectSize3), rectSize3 + curvatureRect(rectSize3));
	endShape(CLOSE);

	//fourth rect
	let rectSize4 = rectSize3 - 10;
	beginShape();
	vertex(-rectSize4 + curvatureRect(rectSize4), -rectSize4 + curvatureRect(rectSize4));
	vertex(rectSize4 + curvatureRect(rectSize4), -rectSize4 + curvatureRect(rectSize4));
	vertex(rectSize4 + curvatureRect(rectSize4), rectSize4 + curvatureRect(rectSize4));
	vertex(-rectSize4 + curvatureRect(rectSize4), rectSize4 + curvatureRect(rectSize4));
	endShape(CLOSE);
	pop();
}

/* let curvatureRect = (crvR) => {
	return random(crvR * noize) - (crvR * noize) / 2;
}; */

function curvatureRect(crvR) {
	return random(crvR * noize) - crvR * noize / 2;
}