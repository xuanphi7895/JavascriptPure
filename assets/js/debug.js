const js = { language: "en", "label": "Phi" };

const edu = {...js, level: 'PD' };
console.log(edu);
const newbie = edu;
console.log(newbie);
delete edu.language;

console.log(Object.keys(newbie).length);