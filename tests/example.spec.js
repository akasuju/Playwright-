const {test,expect}=require('@playwright/test')

test("myfirsttest",async function({page}) {
  
  expect(12).toBe(12)

})
test("secondtest", async function ({page}) {
  expect(12).toBe(102)
})

test("thirdtest", async function ({page}) {
  expect(120).toBe(120)
})