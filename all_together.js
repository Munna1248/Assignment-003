/** Problem -01 ( Divide the Asset ) */

// case 1
var area = 100;
var individualShare1 = area / 2;
console.log(individualShare1);

// case 2
var area = 15;
var individualShare2 = area / 2;
console.log(individualShare2);

// case 3
var area = 2060;
var individualShare3 = area / 2;
console.log(individualShare3);



/** Problem -02 ( Cycle or Laptop ) */

// Case 1
var money = 45000;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

// Case 2
var money = 10000;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

// Case 3
var money = 9999;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}




/** Problem -03 ( Medicine Planner ) */

// TCase 1
var lastDay = 4;
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}

// Case 2
var lastDay = 6;
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}




/** Problem 04 - (Delete / Store) */

// Case 1
var fileName1 = "result.pdf";
if (
  fileName1.startsWith("#") ||
  fileName1.endsWith(".pdf") ||
  fileName1.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 2
var fileName2 = "data.docx";
if (
  fileName2.startsWith("#") ||
  fileName2.endsWith(".pdf") ||
  fileName2.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 3
var fileName3 = "pdfData.jpg";
if (
  fileName3.startsWith("#") ||
  fileName3.endsWith(".pdf") ||
  fileName3.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 4
var fileName4 = "#exp.mp4";
if (
  fileName4.startsWith("#") ||
  fileName4.endsWith(".pdf") ||
  fileName4.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 5
var fileName5 = "docx.txt";
if (
  fileName5.startsWith("#") ||
  fileName5.endsWith(".pdf") ||
  fileName5.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 6
var fileName6 = "docx.xpdf";
if (
  fileName6.startsWith("#") ||
  fileName6.endsWith(".pdf") ||
  fileName6.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

// Case 7
var fileName7 = "slipdf.txt";
if (
  fileName7.startsWith("#") ||
  fileName7.endsWith(".pdf") ||
  fileName7.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}





/** Problem 05 - ( PH Email Generator )  */
var student1 = { name: "jhankar", roll: 1014, department: "cse" };
var email1 = student1.name + student1.roll + "." + student1.department + "@ph.ac.bd";
console.log(email1);

var student2 = { name: "monu", roll: 99, department: "eee" };
var email2 = student2.name + student2.roll + "." + student2.department + "@ph.ac.bd";
console.log(email2);

var student3 = { name: "mewo", roll: 96, department: "cse" };
var email3 = student3.name + student3.roll + "." + student3.department + "@ph.ac.bd";
console.log(email3);
