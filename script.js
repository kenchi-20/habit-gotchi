let BG='#c3d0a0',INK='#2b3622',MID='#6b7a4f';
const KEY='pocketpet-v1',PK='pocketpet-style',DK='pocketpet-dex';
const NAMES=['Egg','Baby','Child','Adult'];
const FORMS=['Fluffwing','Grumble','Shellby','Fanglet','Whisker','Bubblo','Starlet','Droplet'];
const FORM_DESC=[
  'A soft flyer with gentle wings.',
  'A grumpy brow and sturdy frame.',
  'A shelled friend that loves calm days.',
  'Spiky and brave when cared for well.',
  'Whiskered and quick to play.',
  'Round and bouncy, full of bubbles.',
  'Sparkles when happy — a rare glow.',
  'Slick and curious, loves clean water.'
];
const SHELLS=[{n:'Mint',s:'#7fd9c4',i:'#12332f',b:'#2f5f6b',btn:'#ffc857'},{n:'Bubblegum',s:'#ff9ec4',i:'#4a1230',b:'#7a3a5c',btn:'#fff0a8'},{n:'Grape',s:'#b79cf2',i:'#25164d',b:'#4a3a85',btn:'#ffd1f0'},{n:'Sky',s:'#8cc8ff',i:'#0f2c4d',b:'#2d5a8a',btn:'#ffd98a'},{n:'Sunny',s:'#ffd95e',i:'#3d2d00',b:'#7a5c12',btn:'#ff8fb1'},{n:'Graphite',s:'#4b4f58',i:'#f2f2f2',b:'#1e2026',btn:'#ffc857'}];
const LCDS=[['#c3d0a0','#2b3622','#6b7a4f','Green'],['#ecd08a','#3b2a0a','#8a6d2f','Amber'],['#c4dce6','#1c2e3a','#5d7f92','Ice'],['#d6d6d0','#222222','#808080','Mono']];
const BOW=["##..##","######","##..##"],CROWN=["#.##.#","######"],HAT=[".####.",".#oo#.","######"];
let P=Object.assign({name:'Pip',breed:0,acc:0,shell:0,lcd:0},(()=>{try{return JSON.parse(localStorage.getItem(PK))||{}}catch(e){return{}}})());
let DEX=(()=>{try{const d=JSON.parse(localStorage.getItem(DK));return Array.isArray(d)?d:[0]}catch(e){return[0]}})();
const $=id=>document.getElementById(id),X=$('c').getContext('2d');
const EGG=["...####...","..######..",".########.",".########.","##########","##########","##########","##########",".########.","..######.."];
const ST=[null,
{b:["....##....","...####...","..######..",".########.","##########","##########","##########","##########",".########.","..##oo##..",".##....##."],e:[[3,5],[6,5]],s:1,m:[5,7],ch:[[1,6],[8,6]]},
{b:["#..........#","###......###",".##########.","############","############","############","############","############",".###oooo###.","..#oooooo#..","..########..",".###....###."],e:[[3,4],[8,4]],s:1,m:[6,6],ch:[[1,5],[10,5]],tail:1}];
const AD=[
{b:["##..........##","###........###",".############.","##############","##############","##############","##############","##############","###oooooooo###",".##oooooooo##.","..#oooooooo#..","..##########..",".###......###."],e:[[3,4],[9,4]],s:2,m:[7,6],wing:1,ch:[[1,7],[12,7]]},
{b:["...#......#...","..##......##..",".############.","##############","##############","##############","##############","##############","##############","##oooooooooo##",".##oooooooo##.","..##########..","..##..##..##.."],e:[[3,4],[9,4]],s:2,m:[7,7],brow:1},
{b:["..############..","####oooooooo####","##oooooooooooo##","##oooooooooooo##","################","################","################","################","################","################",".##############.",".##oooooooooo##.","..##oooooooo##..","...############.","....##....##...."],e:[[4,4],[10,4]],s:2,m:[8,6],shell:1,ch:[[2,7],[13,7]]},
{b:["#............#.",".#..........#..","..############.","..############.","##############.","###############","###############","###############","###oooooooo####",".##oooooooo###.","..#oooooooo#...","..##########...","..##......##..."],e:[[4,4],[10,4]],s:2,m:[8,6],spike:1},
{b:["#..........#","##........##",".##########.",".##########.","############","############","############","############","##oooooooooo",".##oooooooo#","..#oooooooo#","..##########","..###....###"],e:[[3,4],[8,4]],s:2,m:[6,6],tail:1,ch:[[1,7],[10,7]],whisker:1},
{b:["...######...","..########..",".##########.","############","############","############","############","############",".###oooo###.","..##oooo##..","...######...","....##..##.."],e:[[3,4],[8,4]],s:2,m:[6,7],bubble:1,ch:[[2,6],[11,6]]},
{b:["......##......","....######....","...########...","..##########..",".############.","##############","##############","##############","###oooooooo###",".##oooooooo##.","..##########..","...##....##..."],e:[[3,4],[9,4]],s:2,m:[7,6],star:1,ch:[[1,6],[12,6]]},
{b:["......##......",".....####.....","....######....","...########...",".############.","##############","##############","##############","##oooooooooo##",".##oooooooo##.","..##########..","...##....##..."],e:[[3,4],[9,4]],s:2,m:[7,6],drop:1,ch:[[2,6],[11,6]]}
];
const MOUTH={happy:[[-2,0],[-1,1],[0,1],[1,0]],sad:[[-2,1],[-1,0],[0,0],[1,1]],ok:[[-1,0],[0,0]],eat:[[-1,0],[0,0],[-1,1],[0,1]],sleep:[[-1,0],[0,0]],dead:[[-2,1],[-1,0],[0,0],[1,1]]};
const WING=["...#","..##",".###","..##"],HEART=[".#.#.","#####",".###.","..#.."],POOP=[".#.","###","###"],Z=["###","..#",".#.","#..","###"];

const fresh=()=>({t:Date.now(),age:0,food:70,fun:70,energy:80,health:100,poop:0,pt:100,sleep:false,alive:true});
function load(){try{const j=JSON.parse(localStorage.getItem(KEY));if(j&&typeof j.age==='number')return j}catch(e){}return fresh()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function saveDex(){try{localStorage.setItem(DK,JSON.stringify(DEX))}catch(e){}}
function unlockForm(i){
  if(typeof i!=='number'||i<0||i>=FORMS.length)return;
  if(!DEX.includes(i)){DEX.push(i);saveDex();say('Petdex unlocked: '+FORMS[i]+'!',3500)}
}
const stageOf=s=>s.age<15?0:s.age<180?1:s.age<600?2:3;
const cl=v=>Math.max(0,Math.min(100,v));
function pickForm(r){
  if(r>.88)return 0;
  if(r>.76)return 6;
  if(r>.64)return 4;
  if(r>.52)return 5;
  if(r>.40)return 2;
  if(r>.28)return 7;
  if(r>.16)return 3;
  return 1;
}
let S=load(),flash={t:'',u:0},anim={k:'',u:0},play=null,mode=null,last=stageOf(S);
let lookAnim={dir:null,until:0},diceAnim={roll:0,until:0};
if(typeof S.form==='number')unlockForm(S.form);

function step(d){
  if(!S.alive)return;
  S.age+=d;
  if(stageOf(S)===0)return;
  if(stageOf(S)===2){S.cs=(S.cs||0)+(S.food+S.fun+S.health)/300*d;S.cd=(S.cd||0)+d}
  S.food=cl(S.food-.13*d);
  S.fun=cl(S.fun-((S.sleep?.03:.1)+S.poop*.03)*d);
  S.energy=cl(S.energy+(S.sleep?.6:-.05)*d);
  S.pt-=d;
  if(S.pt<=0){if(S.food>20&&!S.sleep&&S.poop<4)S.poop++;S.pt=90+Math.random()*90}
  const bad=(S.food<=0?1:0)+(S.energy<=0&&!S.sleep?1:0)+(S.poop>=2?1:0)+(S.fun<=0?.5:0);
  S.health=cl(S.health+(bad?-bad*.15:.1)*d);
  if(S.sleep&&S.energy>=100)S.sleep=false;
  if(S.health<=0){S.alive=false;S.sleep=false;clearReactTimers();play=null;mode=null}
}
function tick(){
  const now=Date.now();let n=Math.min((now-S.t)/1000,600);S.t=now;
  while(n>.001){const d=Math.min(1,n);step(d);n-=d}
  const s=stageOf(S);
  if(s!==last){
    if(s===3){S.form=pickForm((S.cs||0)/(S.cd||1));unlockForm(S.form)}
    if(S.alive)say(s===1?'Pip hatched!':'Pip grew into a '+(s===3?FORMS[S.form]:'child')+'!',4000);
    last=s;
  }
  save();render();
}
const say=(t,ms=3000)=>{flash={t,u:Date.now()+ms};render()};
const can=()=>S.alive&&stageOf(S)>0;

$('feed').onclick=()=>{
  if(!can())return;
  if(S.sleep)return say('Pip is asleep. Turn the light on first.');
  if(S.food>=95)return say('Pip isn’t hungry.');
  S.food=cl(S.food+30);S.fun=cl(S.fun+3);S.pt=Math.min(S.pt,40+Math.random()*30);
  anim={k:'eat',u:Date.now()+1500};say('Yum!',1500);
};
$('clean').onclick=()=>{
  if(!can())return;
  if(!S.poop)return say('Nothing to clean up.');
  S.poop=0;S.fun=cl(S.fun+5);say('All clean!');
};
$('light').onclick=()=>{
  if(!can())return;
  if(!S.sleep&&S.energy>=90)return say('Pip isn’t sleepy yet.');
  S.sleep=!S.sleep;say(S.sleep?'Good night, Pip.':'Good morning, Pip!');
};
$('playb').onclick=()=>{
  if(!can())return;
  if(S.sleep)return say('Pip is asleep.');
  if(S.energy<15)return say('Pip is too tired to play.');
  mode='pick';play=null;render();
};
$('g-look').onclick=()=>{
  mode='look';
  play={round:0,wins:0,text:'Round 1 of 3: which way will Pip look?'};
  render();
};
$('g-dice').onclick=()=>{
  mode='dice';
  play={round:0,wins:0,text:'Round 1 of 3: guess high (4–6) or low (1–3)?'};
  render();
};
let reactTimer=null,reactMiss=null;
function clearReactTimers(){
  if(reactTimer){clearTimeout(reactTimer);reactTimer=null}
  if(reactMiss){clearTimeout(reactMiss);reactMiss=null}
}
function armReactRound(prefix){
  clearReactTimers();
  if(!play||mode!=='react')return;
  play.ready=false;
  play.text=(prefix||'')+'Wait for the heart, then tap Catch!';
  const delay=800+Math.random()*1400;
  reactTimer=setTimeout(()=>{
    if(!play||mode!=='react')return;
    play.ready=true;
    play.text='Now! Tap Catch!';
    render();
    reactMiss=setTimeout(()=>{
      if(!play||mode!=='react'||!play.ready)return;
      play.ready=false;
      play.round++;
      S.energy=cl(S.energy-2);
      if(play.round>=3)endPlay(play.wins,'Catch');
      else armReactRound('Missed it. Round '+(play.round+1)+' of 3 — ');
      render();
    },1200);
  },delay);
  render();
}
$('g-react').onclick=()=>{
  mode='react';
  play={round:0,wins:0,ready:false,text:'Wait for the heart, then tap Catch!'};
  armReactRound();
};
$('g-back').onclick=()=>{clearReactTimers();mode=null;play=null;render()};

function endPlay(wins,label){
  clearReactTimers();
  S.fun=cl(S.fun+(wins?wins*12:4));
  S.energy=cl(S.energy-6);
  play=null;mode=null;
  say('You won '+wins+' of 3 at '+label+'. Pip had fun!',3500);
}
function guess(side){
  if(!play||mode!=='look')return;
  const pet=Math.random()<.5?0:1,hit=pet===side;
  lookAnim={dir:pet,until:Date.now()+1200};
  if(hit)play.wins++;
  play.round++;S.energy=cl(S.energy-3);
  if(play.round>=3)endPlay(play.wins,'Look');
  else{play.text=(hit?'Right! ':'Missed. ')+'Round '+(play.round+1)+' of 3: which way will Pip look?';render()}
}
function diceGuess(hi){
  if(!play||mode!=='dice')return;
  const roll=1+Math.floor(Math.random()*6);
  const hit=hi?(roll>=4):(roll<=3);
  diceAnim={roll,until:Date.now()+1200};
  if(hit)play.wins++;
  play.round++;S.energy=cl(S.energy-3);
  if(play.round>=3)endPlay(play.wins,'Dice');
  else{play.text='Rolled '+roll+'. '+(hit?'Nice! ':'Miss. ')+'Round '+(play.round+1)+' of 3: high or low?';render()}
}
function reactCatch(){
  if(!play||mode!=='react')return;
  if(!play.ready){
    clearReactTimers();
    say('Too soon!',1200);
    armReactRound();
    return;
  }
  clearReactTimers();
  play.wins++;play.round++;play.ready=false;S.energy=cl(S.energy-3);
  if(play.round>=3)endPlay(play.wins,'Catch');
  else armReactRound('Great! Round '+(play.round+1)+' of 3 — ');
}
$('gl').onclick=()=>guess(0);
$('gr').onclick=()=>guess(1);
$('dh').onclick=()=>diceGuess(true);
$('dl').onclick=()=>diceGuess(false);
$('catch').onclick=()=>reactCatch();
$('newegg').onclick=()=>{clearReactTimers();S=fresh();last=0;play=null;mode=null;flash={t:'',u:0};lookAnim={dir:null,until:0};diceAnim={roll:0,until:0};save();render()};

function msgText(){
  if(!S.alive)return 'Pip passed away at '+Math.floor(S.age/60)+' min old. Hatch a new egg to try again.';
  if(Date.now()<flash.u)return flash.t;
  if(play)return play.text;
  if(mode==='pick')return 'Pick a game to play with Pip.';
  if(stageOf(S)===0)return 'Something is moving inside the egg.';
  if(S.sleep)return 'Pip is sleeping.';
  if(S.poop>0)return 'There’s a mess to clean up.';
  if(S.food<25)return 'Pip is hungry.';
  if(S.energy<15)return 'Pip is very tired. Turn the light off.';
  if(S.fun<25)return 'Pip is bored. Play a game!';
  return 'Pip is doing well.';
}
function render(){
  const st=stageOf(S);
  $('msg').textContent=msgText().replace(/Pip/g,()=>P.name);
  $('age').textContent=!S.alive?'Passed away':st===0?'Egg':(st===3?FORMS[S.form||0]:NAMES[st])+', '+Math.floor(S.age/60)+' min old';
  [['food',S.food],['fun',S.fun],['energy',S.energy],['health',S.health]].forEach(([k,v])=>{
    const b=$('b-'+k);b.style.width=Math.round(v)+'%';b.classList.toggle('low',v<25);
  });
  const busy=!!play||mode==='pick';
  $('btns').hidden=!S.alive||busy;
  $('modes').hidden=mode!=='pick';
  $('play').hidden=mode!=='look'||!play;
  $('dice').hidden=mode!=='dice'||!play;
  $('react').hidden=mode!=='react'||!play;
  $('again').hidden=S.alive;
  ['feed','playb','clean','light'].forEach(id=>$(id).disabled=st===0);
  $('c').classList.toggle('dark',S.sleep);
}

const px=(x,y,c)=>{X.fillStyle=c;X.fillRect(x,y,1,1)};
const bmp=(b,ox,oy,c)=>b.forEach((r,y)=>{for(let x=0;x<r.length;x++){if(r[x]==='#')px(ox+x,oy+y,c);else if(r[x]==='o')px(ox+x,oy+y,MID)}});
function draw(){
  const f=Math.floor(Date.now()/500)%2,st=stageOf(S);
  X.fillStyle=BG;X.fillRect(0,0,32,24);
  if(st===0){
    const w=S.age>8?(f?-1:1):0;
    bmp(EGG,11+w,12,INK);
    [[3,5],[6,4],[5,7]].forEach(([x,y])=>px(11+w+x,12+y,BG));
    if(S.age>10)[[4,2],[5,3],[4,4],[5,5]].forEach(([x,y])=>px(11+w+x,12+y,BG));
  }else{
    const d=st===3?AD[S.form||0]:ST[st],w=d.b[0].length,h=d.b.length,ox=Math.floor((32-w)/2);
    const oy=24-h-1-(S.alive&&!S.sleep&&f?1:0);
    const eating=anim.k==='eat'&&Date.now()<anim.u;

    const sad=S.food<25||S.fun<25||S.health<40||S.energy<15||S.poop>=2;
    const mood=!S.alive?'dead':S.sleep?'sleep':eating?'eat':sad?'sad':(S.fun>70&&S.food>50)?'happy':'ok';
    const blink=Math.floor(Date.now()/250)%16===0;bmp(d.b,ox,oy,INK);marks(d,ox,oy,w);
    d.e.forEach(([x,y],i)=>{
      if(mood==='dead')[[0,0],[2,0],[1,1],[0,2],[2,2]].forEach(([a,b])=>px(ox+x+a-1,oy+y+b-1,BG));
      else if(mood==='sleep'||blink){px(ox+x,oy+y+d.s-1,BG);px(ox+x+1,oy+y+d.s-1,BG)}
      else{const lk=lookAnim.dir!==null&&Date.now()<lookAnim.until;for(let a=0;a<d.s;a++)for(let b=0;b<d.s;b++){if(lk&&d.s>1&&(lookAnim.dir===0?a===0:a===d.s-1))continue;px(ox+x+a,oy+y+b,BG)}if(d.brow)px(ox+x+i,oy+y-1,BG)}
    });
    MOUTH[mood].forEach(([a,b])=>px(ox+d.m[0]+a,oy+d.m[1]+b,BG));
    const fl=S.alive&&!S.sleep&&f;
    if(d.ch&&(mood==='happy'||mood==='eat'))d.ch.forEach(([a,b])=>px(ox+a,oy+b,MID));
    if(d.tail){const tx=ox+w,ty=oy+h-4-(fl?1:0);px(tx,ty+3,INK);px(tx+1,ty+2,INK);px(tx+2,ty+(fl?0:1),INK)}
    if(d.wing){const wy=oy+6-(fl?1:0);WING.forEach((r,y)=>{for(let x=0;x<4;x++)if(r[x]==='#'){px(ox-4+x,wy+y,INK);px(ox+w+3-x,wy+y,INK)}})}
    if(d.shell){for(let y=4;y<10;y++)for(let x=3;x<w-3;x++)if((x+y)%3===0)px(ox+x,oy+y,MID)}
    if(d.spike){const sx=ox+w-1;px(sx,oy-1,INK);px(sx,oy,INK);px(sx-1,oy-2,INK);px(sx-1,oy-1,INK);px(sx+1,oy+1,INK)}
    if(d.whisker){const wy=oy+d.m[1];px(ox-1,wy,INK);px(ox-2,wy-1,INK);px(ox-1,wy+1,INK);px(ox-2,wy+2,INK);px(ox+w,wy,INK);px(ox+w+1,wy-1,INK);px(ox+w,wy+1,INK);px(ox+w+1,wy+2,INK)}
    if(d.bubble&&fl){px(ox-2,oy+4,INK);px(ox-3,oy+3,INK);px(ox+w+1,oy+5,INK)}
    if(d.star&&mood==='happy'){px(2,3,INK);px(3,2,INK);px(3,4,INK);px(4,3,INK);px(28,4,INK);px(29,3,INK)}
    if(d.drop){px(ox+Math.floor(w/2),oy-1,INK);px(ox+Math.floor(w/2),oy-2,MID)}
    drawAcc(d,ox,oy,w,mood,blink);
    if(eating){const fx=ox-4+(f?0:1);for(let a=0;a<3;a++)for(let b=0;b<3;b++)px(fx+a,oy+d.m[1]+b-1,INK)}
    if(play&&mode==='react'&&play.ready){
      bmp(HEART,2,f?1:2,INK);
      bmp(HEART,25,f?2:1,INK);
    }else if(mood==='happy')bmp(HEART,2,f?2:3,INK);
    if(mood==='sleep')bmp(Z,f?25:26,f?3:2,INK);
    if(mood==='dead')for(let x=ox+w/2-3;x<ox+w/2+3;x++)px(Math.floor(x),Math.max(0,oy-3),INK);
  }
  if(lookAnim.dir!==null&&Date.now()<lookAnim.until){
    if(lookAnim.dir===0)[3,2,1,2,3].forEach((ax,ay)=>px(ax,ay+1,INK));
    else[28,29,30,29,28].forEach((ax,ay)=>px(ax,ay+1,INK));
  }
  if(diceAnim.roll&&Date.now()<diceAnim.until){
    const r=diceAnim.roll;
    const dd=[[],[[3,3]],[[1,1],[5,5]],[[1,1],[3,3],[5,5]],[[1,1],[1,5],[5,1],[5,5]],[[1,1],[1,5],[3,3],[5,1],[5,5]],[[1,1],[1,3],[1,5],[5,1],[5,3],[5,5]]];
    const dx=13,dy=1;X.fillStyle=BG;X.fillRect(dx,dy,7,7);
    for(let ii=0;ii<7;ii++){px(dx+ii,dy,INK);px(dx+ii,dy+6,INK);px(dx,dy+ii,INK);px(dx+6,dy+ii,INK);}
    dd[r].forEach(([dotx,doty])=>px(dx+dotx,dy+doty,INK));
  }
  for(let i=0;i<S.poop;i++)bmp(POOP,i%2?1:28,21-Math.floor(i/2)*4,INK);
  if(flash.u&&Date.now()>=flash.u){flash.u=0;render()}
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick()});
function marks(d,ox,oy,w){
  if(!P.breed)return;
  d.b.forEach((r,y)=>{for(let x=0;x<r.length;x++){
    if(r[x]!=='#'||y<3)continue;
    const on=P.breed===1?((x%4===1&&y%4===2)||(x%4===3&&y%4===0)):P.breed===2?(y%3===1):(x>=w-5&&x<w-1&&y<8);
    if(on)px(ox+x,oy+y,MID);
  }});
}
function drawAcc(d,ox,oy,w,mood,blink){
  const a=P.acc;if(!a)return;
  if(a===4){
    if(mood==='sleep'||mood==='dead'||blink)return;
    const s=d.s;
    d.e.forEach(([x,y])=>{for(let dx=-1;dx<=s;dx++)for(let dy=-1;dy<=s;dy++)px(ox+x+dx,oy+y+dy,dx>=0&&dx<s&&dy>=0&&dy<s?INK:BG)});
    return;
  }
  const it=[null,BOW,CROWN,HAT][a],left=a===1?ox+w-6:ox+(w-6)/2;
  bmp(it,left,oy+2-it.length,INK);
}
function saveP(){try{localStorage.setItem(PK,JSON.stringify(P))}catch(e){}}
function applyStyle(){
  const t=SHELLS[P.shell]||SHELLS[0],l=LCDS[P.lcd]||LCDS[0],r=document.documentElement.style;
  r.setProperty('--shell',t.s);r.setProperty('--shell-ink',t.i);r.setProperty('--bezel',t.b);r.setProperty('--btn',t.btn);r.setProperty('--lcd',l[0]);
  BG=l[0];INK=l[1];MID=l[2];
  saveP();draw();
}
function chips(id,names,key,colors){
  const el=$(id);el.innerHTML='';
  names.forEach((n,i)=>{
    const b=document.createElement('button');
    b.className='chip';b.textContent=n;b.setAttribute('aria-pressed',P[key]===i);
    if(colors){b.style.boxShadow='inset 12px 0 0 '+colors[i];b.style.paddingLeft='20px'}
    b.onclick=()=>{P[key]=i;[...el.children].forEach((c,j)=>c.setAttribute('aria-pressed',j===i));applyStyle()};
    el.appendChild(b);
  });
}
function renderDex(){
  const list=$('dex-list');list.innerHTML='';
  const found=DEX.length;
  $('dex-count').textContent=found+' / '+FORMS.length+' unlocked';
  FORMS.forEach((name,i)=>{
    const unlocked=DEX.includes(i);
    const card=document.createElement('button');
    card.className='dex-card'+(unlocked?'':' locked');
    card.innerHTML=unlocked
      ?('<strong>#'+String(i+1).padStart(2,'0')+' '+name+'</strong><span>'+FORM_DESC[i]+'</span>')
      :('<strong>#'+String(i+1).padStart(2,'0')+' ???</strong><span>Not unlocked yet. Raise a pet into adulthood.</span>');
    list.appendChild(card);
  });
}
$('dex-btn').onclick=()=>{
  const open=$('dex').hidden;
  $('dex').hidden=!open;
  $('cust').hidden=true;
  $('cust-btn').textContent='Customize';
  $('cust-btn').setAttribute('aria-expanded','false');
  $('dex-btn').textContent=open?'Close Petdex':'Petdex';
  $('dex-btn').setAttribute('aria-expanded',String(open));
  if(open)renderDex();
};
$('nm').value=P.name;
$('nm').oninput=e=>{P.name=e.target.value.trim()||'Pip';saveP();render()};
$('cust-btn').onclick=()=>{
  const h=$('cust').hidden=!$('cust').hidden;
  $('cust-btn').textContent=h?'Customize':'Close customize';
  $('cust-btn').setAttribute('aria-expanded',!h);
  if(!h){$('dex').hidden=true;$('dex-btn').textContent='Petdex';$('dex-btn').setAttribute('aria-expanded','false')}
};
chips('c-breed',['Classic','Spotted','Striped','Patched'],'breed');
chips('c-acc',['None','Bow','Crown','Top hat','Glasses'],'acc');
chips('c-shell',SHELLS.map(x=>x.n),'shell',SHELLS.map(x=>x.s));
chips('c-lcd',LCDS.map(x=>x[3]),'lcd',LCDS.map(x=>x[0]));
applyStyle();
tick();draw();
setInterval(tick,1000);setInterval(draw,250);
