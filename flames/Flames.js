//DOM
const jeeva="lksdlk";
const getUsr1Name = document.getElementById("name1");
const getUsr2Name = document.getElementById("name2");

const submitBtn = document.getElementById(`submit`);
const rstBtn=document.getElementById(`rst`);
const outPut = document.getElementById(`output`);



//function
function run() {
  const usr1 = getUsr1Name.value.toUpperCase();
  const usr2 = getUsr2Name.value.toUpperCase();

  const name1 = [...usr1];
  const name2 = [...usr2];

  const finArr = [];
  console.log(name1, name2, "=======>");
  function loop() {
    for (let i = 0; i < name1.length; i++) {
      const x = name2.every((j, jIndex) => {
        console.log(name1[i], j, jIndex, "---");
        if (name1[i] == j) {
          name2.splice(jIndex, 1);
          console.log("spliced");
        }
        return name1[i] != j;
      });
      // console.log(x);
      if (x == true) {
        finArr.push(name1[i]);
      }
      // console.log(i);
    }
    finArr.push(...name2);
    // for (let i = 0; i < name2.length; i++) {
    //   const x = name1.every((j) => {
    //     return name2[i] != j;
    //   });
    //   if (x == true) {
    //     finArr.push(name2[i]);
    //   }
    // }

    console.log(finArr, finArr.length);
  }
  loop();
  /*const combNames = [...name1,...name2].sort();
console.log(combNames);
const dup = [];

for (let i = 0; i < combNames.length; i++) {
  // console.log('hi')
  //   console.log(combNames[i]==combNames[i+1])
  if ((combNames[i] == combNames[i + 1]) == true) {
    // dup.push(combNames[i]);
    combNames.splice(i, 1);
    // console.log( combNames);
  } else if ((combNames[i] == combNames[i + 1]) == false) {
    dup.push(combNames[i]);
  }
}
console.log(dup, dup.length);
const dupLegnth = dup.length;
const word = ["Friend", "Love", "Affection", "Marriage", "Enemy", "Sister"];
const flames = [...word];

if (dupLegnth - 1 < flames.length) {
  console.log(flames[dupLegnth - 1]);
} else if (dupLegnth - 1 >= flames.length) {
  // console.log(flames[dupLegnth-1])
  for (let i = 0; i < dupLegnth - 6; i++) {
    flames[flames.length] = flames[i];
  }
  console.log(flames[dupLegnth - 1]);
}
*/

  let combName = finArr.length;
  const orgFlames = [
    "Friend",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Sister",
  ];
  const orgFlamesLen = orgFlames.length;
  var flames = [...orgFlames];
  let flamesFin = [...orgFlames];
  var flamesLen = flames.length;

  // for (let k = 0; k < orgFlames.length; k++) {
  //   //1
  //   for (let i = 0; i < combName ; i++) {
  //     flames.push(flames[i]);
  //     console.log(flamesFin[i], flames[combName - 1]);
  //     if (flames[combName - 1] == flamesFin[i]) {
  //       flamesFin.splice(i, 1);
  //     }
  //   }
  //   flames = [...flamesFin];
  //   flamesLen = flames.length;
  //   console.log(flames, flamesLen, flamesFin, flamesFin.length, "-------");
  // }
  let rmvIndx;
  let rArnArr1;
  let rArnArr2;
  let flamesFinLen;
  let arrFlames = [];

  if (combName != 0) {
    for (let i = 0; i < orgFlamesLen - 1; i++) {
      for (let j = 0; j < combName; j++) {
        flames.push(flames[j]);
      }
      console.log(flames);
      flamesLen = flames.length - 1;
      rmvIndx = flamesFin.findIndex((num, idx) => {
        console.log(
          num,
          idx,
          flames[combName - 1] == num,
          flames[combName - 1]
        );
        return flames[combName - 1] == num;
      });

      flamesFin.splice(rmvIndx, 1);
      flamesFinLen = flamesFin.length;
      console.log(flamesFin);
      rArnArr1 = flamesFin.splice(rmvIndx, flamesFinLen - rmvIndx);
      rArnArr2 = flamesFin;
      flamesFin = [...rArnArr1, ...rArnArr2];
      flamesFinLen = flamesFin.length;
      flames = [...flamesFin];
      flamesLen = flames.length;

      console.log(flames, flamesFin, "--------");
      let output;
      switch (flamesFin[0]) {
        case "Friend":
          output = `${usr1} and ${usr2} are Friends!`;
          break;
        case "Love":
          output = `${usr1} and ${usr2} are two Loving each others!`;
          break;
        case "Affection":
          output = `${usr1} has an affection on ${usr2}!`;
          break;
        case "Marriage":
          output = `Both ${usr1} and ${usr2} will get married soon!`;
          break;
        case "Enemy":
          output = `${usr2} is an Enemy for ${usr1}`;
          break;
        case "Sister":
          output = `${usr1} and ${usr2} are siblings`;
          break;
        default:
          output = `Oops! i can't say anyhing...`;
          break;
      }
      console.log(output);
      outPut.innerText = output;
    }
  } else {
    console.log(
      `${usr1} & ${usr2}, You two are having an uncountable Relationship!`
    );
    outPut.innerHTML = `${usr1} & ${usr2}, You two are having an uncountable Relationship!`;
  }
}
// submitBtn.addiListener(`click`,()=>{
//  run()
// })

rstBtn.addEventListener(`click`,()=>{
  outPut.innerText=``;
})