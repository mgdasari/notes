const test = require("./test");

// try {
//     async function abc() {
//         await test.test();
//       }

//       abc()
// } catch (error) {
//     console.log(error)
// }

async function abc() {
  try {
    await test.test();
  } catch (error) {
    console.log(error);
  }
}

abc();
