const readline = require("readline");
const cheerio = require("cheerio");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the HTML content: ", (html) => {
  const $ = cheerio.load(html);

  const selectElement = $("#minimum-qualifications");

  if (selectElement.length === 0) {
    console.error("Select element not found");
    process.exit(1);
  }

  const optionValues = [];

  selectElement.find("option").each((index, element) => {
    const optionValue = $(element).attr("value");
    if (optionValue) {
      optionValues.push(optionValue);
    }
  });

  console.log(optionValues);

  rl.close();
});
