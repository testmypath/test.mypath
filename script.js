// ---------- QUESTIONS ----------
const questions = [
{category:"Social Influence",text:"My parents told me which job or subject is better for a girl, and I listened to them."},
{category:"Social Influence",text:"A teacher or school counsellor told me that science or technology might be too hard for girls."},
{category:"Social Influence",text:"My family thinks I should choose a safe and practical job instead of the one I really want."},
{category:"Social Influence",text:"My parents or relatives already have ideas about what job I should choose in the future."},
{category:"Social Influence",text:"I do not see many women around me working in science or technology, so it is hard to imagine myself doing it too."},
{category:"Social Influence",text:"Because there are not many women role models in STEM around me, it feels less possible for me."},
{category:"Social Influence",text:"Some adults in my life say that science and engineering jobs are not very suitable for girls."},
{category:"Social Influence",text:"Friends or relatives often suggest that girls should choose the same kinds of jobs."},
{category:"Social Influence",text:"I sometimes think I should choose the same kind of job as successful women in my family."},
{category:"Social Influence",text:"At school, teachers sometimes encourage boys more than girls in math or science."},
{category:"Social Influence",text:"My parents compare me with other students or relatives when talking about future jobs."},
{category:"Social Influence",text:"School rules, adults, or scholarship opportunities sometimes push me toward certain subjects or careers."},
{category:"Social Influence",text:"Sometimes I feel like adults have already decided what kind of job I should choose."},
{category:"Social Influence",text:"I think about my family’s or teachers’ feelings when choosing what I want to study in the future."},
{category:"Social Influence",text:"The opinions of adults I respect influence my career ideas more than my own interests."},

{category:"Perfectionist Trap",text:"I avoid subjects where I might not understand everything right away, because struggling makes me feel like I failed."},
{category:"Perfectionist Trap",text:"When other students seem to understand math or science easily, I feel like I may never be as good as them."},
{category:"Perfectionist Trap",text:"I prefer subjects where success feels easier instead of subjects where I might make many mistakes while learning."},
{category:"Perfectionist Trap",text:"The idea of doing badly on a difficult science or math test scares me a lot."},
{category:"Perfectionist Trap",text:"I feel like I must be one of the best in class, or I do not want to try that subject."},
{category:"Perfectionist Trap",text:"I would rather avoid a hard topic than risk getting a lower grade than I expected."},
{category:"Perfectionist Trap",text:"I sometimes think that if I have to work very hard at STEM, it means I am not naturally good at it."},
{category:"Perfectionist Trap",text:"My own very high expectations stop me from trying difficult technical subjects."},
{category:"Perfectionist Trap",text:"I feel safer choosing a subject where I can do well without too much struggle."},
{category:"Perfectionist Trap",text:"I worry that people will judge me if I do not do very well in STEM subjects."},
{category:"Perfectionist Trap",text:"Perfectionism makes me put off difficult STEM tasks until I lose interest in them."},
{category:"Perfectionist Trap",text:"I worry that if STEM feels harder for me than for others, it means it is not for me."},
{category:"Perfectionist Trap",text:"I want to always look capable, so subjects with lots of trial and error feel uncomfortable to me."},
{category:"Perfectionist Trap",text:"I avoid STEM because making mistakes in front of others makes me feel embarrassed."},
{category:"Perfectionist Trap",text:"Deep down, I may avoid harder subjects because I do not want to feel “not good enough.”"},

{category:"Cultural / Social Barrier",text:"In my culture, science and technology are often seen as better for boys than for girls."},
{category:"Cultural / Social Barrier",text:"People around me think girls should choose jobs that leave more time for family later."},
{category:"Cultural / Social Barrier",text:"I worry that choosing STEM will make people think I am too ambitious or not feminine enough."},
{category:"Cultural / Social Barrier",text:"Traditional ideas in my family or community affect what I think girls should study."},
{category:"Cultural / Social Barrier",text:"People around me believe girls are naturally better at humanities or caring jobs."},
{category:"Cultural / Social Barrier",text:"In Kazakhstan, engineering or IT can sometimes feel less appropriate for girls."},
{category:"Cultural / Social Barrier",text:"Society often expects women to put marriage and children before demanding careers."},
{category:"Cultural / Social Barrier",text:"I worry that studying STEM might make it harder for me to fit in socially."},
{category:"Cultural / Social Barrier",text:"Girls who study STEM are often treated like exceptions, not something normal."},
{category:"Cultural / Social Barrier",text:"Media and social media often show STEM as more of a boys’ field."},
{category:"Cultural / Social Barrier",text:"Pressure to be a “good daughter” influences my ideas about future jobs."},
{category:"Cultural / Social Barrier",text:"I think about what is seen as respectable for women in society when I imagine my future career."},
{category:"Cultural / Social Barrier",text:"Gender stereotypes I grew up with made me doubt whether STEM is for me."},
{category:"Cultural / Social Barrier",text:"Family and community traditions often value non-STEM careers more for girls."},
{category:"Cultural / Social Barrier",text:"Social attitudes around me make STEM feel unusual or risky for a girl."},

{category:"STEM Interest",text:"In science lessons, when we do experiments, I feel excited and want to do more."},
{category:"STEM Interest",text:"Solving math problems or puzzles makes me happy, even when they are difficult."},
{category:"STEM Interest",text:"In technology or informatics class, I enjoy coding or creating simple programs."},
{category:"STEM Interest",text:"During physics or biology projects, I like observing and understanding how things work."},
{category:"STEM Interest",text:"In math class, I enjoy finding patterns, drawing graphs, and solving problems."},
{category:"STEM Interest",text:"In robotics club or when building things, I stay focused and enjoy the process."},
{category:"STEM Interest",text:"During chemistry or biology practical work, I feel curious and interested."},
{category:"STEM Interest",text:"When I try to fix or understand how a device or app works, I feel motivated."},
{category:"STEM Interest",text:"I enjoy tasks where I have to think logically and solve problems step by step."},
{category:"STEM Interest",text:"When we learn new scientific ideas, I want to explore them more on my own."},
{category:"STEM Interest",text:"I like challenges in math or science, even if they take time to solve."},
{category:"STEM Interest",text:"When I use technology to create something, like a game or website, I enjoy it."},
{category:"STEM Interest",text:"I feel proud when I understand a difficult concept in math or science."},
{category:"STEM Interest",text:"I am interested in how things are built, designed, or engineered."},
{category:"STEM Interest",text:"I would enjoy learning more advanced topics in science, math, or technology in the future."},

{category:"Non-STEM Interest",text:"In language or literature class, I enjoy writing stories, essays, or poems."},
{category:"Non-STEM Interest",text:"I like discussing books, characters, and emotions in class."},
{category:"Non-STEM Interest",text:"In history or social studies, learning about people and past events interests me."},
{category:"Non-STEM Interest",text:"In art or music lessons, drawing, painting, or performing feels fun and relaxing."},
{category:"Non-STEM Interest",text:"I enjoy reading novels, short stories, or poems in my free time."},
{category:"Non-STEM Interest",text:"I like expressing my thoughts and feelings through writing or speaking."},
{category:"Non-STEM Interest",text:"In geography or social science, learning about cultures and places excites me."},
{category:"Non-STEM Interest",text:"I enjoy creative activities like theater, dance, or making posters."},
{category:"Non-STEM Interest",text:"I like tasks where I can use my imagination and creativity."},
{category:"Non-STEM Interest",text:"I enjoy learning about society, traditions, and how people live."},
{category:"Non-STEM Interest",text:"I feel interested when we analyze stories, poems, or artworks."},
{category:"Non-STEM Interest",text:"I enjoy group discussions about opinions, values, or real-life topics."},
{category:"Non-STEM Interest",text:"I like subjects where I can express ideas instead of finding one correct answer."},
{category:"Non-STEM Interest",text:"I enjoy creating presentations, stories, or projects about human experiences."},
{category:"Non-STEM Interest",text:"I would enjoy studying subjects related to arts, languages, or social sciences in the future."}
];

// ---------- SETTINGS ----------
const scale = [1,2,3,4,5];
const categories = ["Social Influence","Perfectionist Trap","Cultural / Social Barrier","STEM Interest","Non-STEM Interest"];

let currentIndex = 0;
let answers = new Array(questions.length).fill(null);

// ---------- ELEMENTS ----------
const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const categoryText = document.getElementById("categoryText");
const resultCard = document.getElementById("resultCard");
const quizCard = document.getElementById("quizCard");
const resultsContainer = document.getElementById("resultsContainer");
const downloadBtn = document.getElementById("downloadBtn");

// ---------- RENDER ----------
function renderQuestion(){
  if(currentIndex>=questions.length){showResults();return;}

  const q=questions[currentIndex];

  questionText.textContent=q.text;
  categoryText.textContent=q.category;
  progressText.textContent=`${currentIndex+1}/75`;
  progressFill.style.width=((currentIndex+1)/75*100)+"%";

  options.innerHTML="";

  scale.forEach(val=>{
    const btn=document.createElement("button");
    btn.className="choice";
    btn.textContent=val;

    btn.onclick=()=>{
      answers[currentIndex]=val;
      currentIndex++;
      renderQuestion();
    };

    options.appendChild(btn);
  });
}

// ---------- CALCULATE ----------
function calculate(){
  const sums={
    "Social Influence":0,
    "Perfectionist Trap":0,
    "Cultural / Social Barrier":0,
    "STEM Interest":0,
    "Non-STEM Interest":0
  };

  questions.forEach((q,i)=>{
    if(answers[i]) sums[q.category]+=answers[i];
  });

  const res={};
  categories.forEach(c=>{
    res[c]=Math.round(sums[c]/75*100);
  });

  return res;
}

// ---------- RESULTS ----------
function showResults(){
  quizCard.style.display="none";
  resultCard.style.display="block";

  const scores=calculate();

  categories.forEach(cat=>{
    const div=document.createElement("div");
    div.innerHTML=`<h3>${cat}</h3><p>${scores[cat]}%</p>`;
    resultsContainer.appendChild(div);
  });
}

// ---------- PDF ----------
downloadBtn.onclick=()=>{
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF();

  const scores=calculate();

  let y=20;
  doc.text("Results",20,y);
  y+=10;

  categories.forEach(c=>{
    doc.text(`${c}: ${scores[c]}%`,20,y);
    y+=8;
  });

  doc.save("results.pdf");
};

// ---------- START ----------
renderQuestion();