const CHAPTERS=[
{name:'Witches & Ghosts',range:'#10–#8',time:'0:00–3:48',file:'chapter-1.mp4',films:'The Witches · Wallace & Gromit · Ghostbusters',transcript:[
['#10 · The Witches (1990)','Witches threaten to turn children into mice in this fantasy adapted from Roald Dahl’s book. The presenter describes the film as frightening but imaginative. Look for the difference between something realistic and something magical.'],
['#9 · Wallace & Gromit: The Curse of the Were-Rabbit (2005)','Wallace and his dog meet a huge rabbit that raids vegetables. This animated adventure mixes a monster mystery with jokes and playful action. The mood is lighter than a serious horror film.'],
['#8 · Ghostbusters (1984)','A team of professionals deals with ghosts. The video shows spooky creatures, including a giant marshmallow character. Comedy makes the danger entertaining. Listen for how the narrator combines the ideas of frightening and funny.']
]},
{name:'Unusual Friends',range:'#7–#5',time:'3:48–6:33',file:'chapter-2.mp4',films:'Frankenweenie · ParaNorman · Halloweentown',transcript:[
['#7 · Frankenweenie (2012)','A boy brings his dog back to life in a black-and-white stop-motion story. Although the film includes monsters and spooky science, the relationship between the boy and his dog gives it an emotional center.'],
['#6 · ParaNorman (2012)','Norman is an unusual boy with a supernatural ability. The animated story combines spooky events with humor. Its message encourages viewers to accept differences instead of judging someone for being unusual.'],
['#5 · Halloweentown (1998)','A bus leads to a magical town with ghosts, witches, and skeletons. This Disney Channel film presents Halloween as an adventure. The narrator also identifies a family message: stay together and listen to each other.']
]},
{name:'Families & Spells',range:'#4–#3',time:'6:33–8:22',file:'chapter-3.mp4',films:'The Addams Family · Hocus Pocus',transcript:[
['#4 · The Addams Family (1991)','This unusual family lives in a spooky-looking world. Large, elaborate sets and exaggerated visual jokes help make the movie entertaining. Their strange behavior creates comedy, even when the objects and places look frightening.'],
['#3 · Hocus Pocus (1993)','Witches, zombies, graveyards, candles, and spell books fill this Halloween story. A spell book contains magical instructions. The narrator describes the movie as comedic: it uses humor as well as spooky images.']
]},
{name:'The Pumpkin Finale',range:'#2–#1',time:'8:22–11:41',file:'chapter-4.mp4',films:'Beetlejuice · Honorable mentions · The Nightmare Before Christmas',transcript:[
['#2 · Beetlejuice (1988)','The presenter praises the mixture of spooky ideas, originality, and comedy. Saying the name Beetlejuice three times is an important detail highlighted in this section. The film’s unusual character and strange setting help create its style.'],
['Honorable mentions','Casper, Monster House, Labyrinth, and Hotel Transylvania appear briefly. They are additional suggestions, rather than numbered top-ten entries.'],
['#1 · The Nightmare Before Christmas (1993)','The countdown’s first choice brings Halloween and Christmas together. Stop-motion animation and songs create its imaginary world. The narrator asks whether it belongs to one holiday or both. This ranking expresses opinions: another viewer may choose a different favorite.']
]}
];
const QUESTIONS=[
['In The Witches, what magical danger do children face?',['Becoming mice','Losing a football match','Traveling to Mars','Forgetting a school song'],0,'Look for the animal shown in the witches’ plan.'],
['The Witches is adapted from…',['A weather report','A book by Roald Dahl','A football interview','A cooking program'],1,'The narrator connects the film with a writer.'],
['What does the Were-Rabbit raid?',['Museums','Movie theaters','Vegetables','Spaceships'],2,'Think about what rabbits like to eat.'],
['What does a lighthearted movie usually feel like?',['Extremely serious all the time','Difficult to understand on purpose','Completely silent','Playful and amusing'],3,'Use the funny action and jokes to work out the mood.'],
['What do the Ghostbusters deal with?',['Ghosts','Lost homework','Broken bicycles','Wild rabbits'],0,'The team’s name gives you a clue.'],
['How does the video describe the appeal of Ghostbusters?',['Only sad and realistic','Spooky and funny together','A musical about school','A documentary without characters'],1,'Can a scene make you laugh and feel nervous?'],
['Who is the boy’s important companion in Frankenweenie?',['A sea captain','A taxi driver','His dog','A football coach'],2,'Look for the animal at the heart of the story.'],
['Which detail shows Frankenweenie is more than a monster story?',['Every scene is a race','It has no relationships','Its characters never care about anyone','The bond between a boy and his pet'],3,'Think about the feelings behind the spooky science.'],
['Which message does the narrator connect to ParaNorman?',['It is okay to be different','Everyone must act exactly alike','Friendship is always a mistake','Unusual people cannot be heroes'],0,'Listen for a positive idea about being unusual.'],
['Which description best matches the mood of ParaNorman?',['A realistic news report','Spooky events mixed with humor','A sports lesson with no story','Only an ordinary shopping trip'],1,'Think about both the supernatural events and the funny moments.'],
['Who might you meet in Halloweentown?',['Only astronauts','Only racing drivers','Ghosts, witches, and skeletons','Only modern office workers'],2,'Look for residents from Halloween stories.'],
['Which family lesson appears in the Halloweentown section?',['Never listen to anyone','Always work alone','Keep every problem secret','Stay together and listen to each other'],3,'The narrator mentions a message about family relationships.'],
['What helps make The Addams Family entertaining?',['Exaggerated visual jokes','A lesson about taxes','A silent weather forecast','Realistic instructions for a school exam'],0,'Pay attention to what the characters do as well as what they say.'],
['In a movie, the set is…',['The final score','The place or constructed surroundings used for filming','The name of every actor','The cinema ticket price'],1,'Think about the rooms and surroundings you see on screen.'],
['Which characters are central to Hocus Pocus?',['Astronauts','Professional footballers','Witches','Ocean explorers'],2,'Look at the costumes and magical objects.'],
['What does comedic tell us about Hocus Pocus?',['It contains no story','It has no characters','It is only a science documentary','It uses humor'],3,'Connect the adjective with the word comedy.'],
['What would you expect to find in a spell book?',['Magical instructions','A bus timetable only','A restaurant receipt','A list of football scores'],0,'Think about why a witch might open this book.'],
['Which statement is an opinion?',['The countdown names Hocus Pocus','The Addams Family is the funniest movie here','The video shows movie clips','The list has numbered entries'],1,'Look for a judgment that another student might disagree with.'],
['How many times does the narrator repeat Beetlejuice’s name?',['One','Two','Three','Ten'],2,'Listen carefully to the repeated name near the end of that movie section.'],
['Which combination does the narrator praise in Beetlejuice?',['Only ordinary daily chores','Only facts and statistics','No surprises and no jokes','Spooky ideas, originality, and humor'],3,'Remember the mix of strange events and comedy.'],
['What is an honorable mention in this countdown?',['An extra suggestion outside the numbered top ten','The winner of every category','A new number-one movie','An instruction to stop watching'],0,'Notice where those short clips appear in the countdown.'],
['Which two holidays connect in The Nightmare Before Christmas?',['Easter and New Year','Halloween and Christmas','Thanksgiving and Easter','Only Independence Day'],1,'The title names one holiday. The spooky setting suggests the other.'],
['What kind of animation does the narrator praise in the final movie?',['Only a live sports broadcast','A filmed news interview','Stop-motion animation','A video call with no animation'],2,'Think about models being moved a little for each photographed frame.'],
['Which recommendation gives a clear reason?',['It is good because it is good','Everyone must choose my favorite','The longest film is always the best','I would choose Frankenweenie because I enjoy stories about friendship with pets'],3,'Choose a sentence with a movie choice and a specific explanation.']
].map((q,i)=>({id:i,chapter:Math.floor(i/6),prompt:q[0],options:q[1],answer:q[2],hint:q[3]}));
if(typeof module!=='undefined')module.exports={CHAPTERS,QUESTIONS};
