Robot = function (x, y, z) {
  // this is the constructor
  console.log("new robot created");

  this.head = new THREE.Bone();
  this.head.position.x = x;
  this.head.position.y = y;
  this.head.position.z = z;

  this.neck = new THREE.Bone();
  this.neck.position.y = -10;
  this.head.add(this.neck);

  this.torso = new THREE.Bone();
  this.torso.position.y = -30;
  this.neck.add(this.torso);

  this.leftUpperArm = new THREE.Bone();
  this.leftUpperArm.position.y = -5;
  this.leftUpperArm.position.x = 5;
  this.neck.add(this.leftUpperArm);

  this.leftLowerArm = new THREE.Bone();
  this.leftLowerArm.position.y = -15;
  this.leftLowerArm.position.x = 5;
  this.leftUpperArm.add(this.leftLowerArm);

  this.leftHand = new THREE.Bone();
  this.leftHand.position.y = -5;
  this.leftHand.position.x = 5;
  this.leftLowerArm.add(this.leftHand);

  this.rightUpperArm = new THREE.Bone();
  this.rightUpperArm.position.y = -5;
  this.rightUpperArm.position.x = -5;
  this.neck.add(this.rightUpperArm);

  this.rightLowerArm = new THREE.Bone();
  this.rightLowerArm.position.y = -15;
  this.rightLowerArm.position.x = -5;
  this.rightUpperArm.add(this.rightLowerArm);

  this.rightHand = new THREE.Bone();
  this.rightHand.position.y = -5;
  this.rightHand.position.x = -5;
  this.rightLowerArm.add(this.rightHand);

  this.leftUpperLeg = new THREE.Bone();
  this.leftUpperLeg.position.y = -5;
  this.leftUpperLeg.position.x = 5;
  this.torso.add(this.leftUpperLeg);

  this.leftLowerLeg = new THREE.Bone();
  this.leftLowerLeg.position.y = -15;
  this.leftLowerLeg.position.x = 5;
  this.leftUpperLeg.add(this.leftLowerLeg);

  this.leftFoot = new THREE.Bone();
  this.leftFoot.position.y = -5;
  this.leftFoot.position.x = 5;
  this.leftLowerLeg.add(this.leftFoot);

  this.rightUpperLeg = new THREE.Bone();
  this.rightUpperLeg.position.y = -5;
  this.rightUpperLeg.position.x = -5;
  this.torso.add(this.rightUpperLeg);

  this.rightLowerLeg = new THREE.Bone();
  this.rightLowerLeg.position.y = -15;
  this.rightLowerLeg.position.x = -5;
  this.rightUpperLeg.add(this.rightLowerLeg);

  this.rightFoot = new THREE.Bone();
  this.rightFoot.position.y = -5;
  this.rightFoot.position.x = -5;
  this.rightLowerLeg.add(this.rightFoot);
};

Robot.prototype.show = function (scene) {
  console.log("show function called");
  rGroup = new THREE.Group();
  rGroup.add(this.head);

  scene.add(rGroup);

  helper = new THREE.SkeletonHelper(rGroup);

  scene.add(helper);
};

Robot.prototype.onAnimate = function () {
  console.log("onAnimate function called");
};
