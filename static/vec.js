function Vec2(x, y) {
    this.x = x;
    this.y = y;

    // Basic algebraic functions
    this.mul = function(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    };

    this.div = function(scalar) {
        return new Vec2(this.x / scalar, this.y / scalar);
    };

    this.add = function(other) {
        return new Vec2(this.x + other.x, this.y + other.y);
    };

    this.sub = function(other) {
        return new Vec2(this.x - other.x, this.y - other.y);
    };

    // Other basic functions
    this.dot = function(other) {
        return this.x * other.x + this.y * other.y;
    };

    this.length = function() {
        return Math.sqrt(this.squareLength());
    };

    this.squareLength = function() {
        return this.dot(this);
    };

    // More complex but useful functions
    this.normalised = function() {
        return this.div(this.length());
    };

    this.perpendicular = function() {
        return new Vec2(-this.y, this.x);
    };

    this.projectOnto = function(dir) {
        return dir.mul(this.dot(dir) / dir.squareLength());
    };

    this.reflectInDirection = function(dir) {
        return this.sub(this.projectOnto(dir).mul(2));
    };

    this.rotatedBy = function(angle) {
        return new Vec2(
            this.x * Math.cos(angle) - this.y * Math.sin(angle),
            this.x * Math.sin(angle) + this.y * Math.cos(angle)
        );
    };
}

// Copies the x, y values out of an object and turns them into a Vec2
function Vec2from(obj) {
    return new Vec2(obj.x, obj.y);
}

function Vec2_ZERO() {
    return new Vec2(0, 0);
}

function Vec2_ONE() {
    return new Vec2(1, 1);
}

function Vec2_LEFT() {
    return new Vec2(1, 0);
}

function Vec2_RIGHT() {
    return new Vec2(-1, 0);
}

function Vec2_UP() {
    return new Vec2(0, -1);
}

function Vec2_DOWN() {
    return new Vec2(0, 1);
}

// Calculate (1 - t)a + tb
function vecLerp(a, b, t) {
    return a.mul(1 - t).add(b.mul(t));
}
