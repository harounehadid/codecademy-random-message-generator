// Storing the quotes' parts in different arrays
const mesStart = ['Spread love everywhere you go ', 'When you reach the end of your rope ', 
'Always remember ', "Don't judge each day by ", 'The future belongs to ', 
'It is during our darkest moments that ', 'Do not go where the path may lead ', 
'Life is a succession of lessons ', 'You will face many defeats in life ', 
'Life is never fair ', 'You only live once ', 'Live in the sunshine ', 
'Go confidently in the direction of your dreams ', 'Life is really simple ', 
'Life itself is the '];
const mesMiddle = ['let no one ever come to you ', 'tie a knot in it ', 
'that you are absolutely unique ', 'the harvest you reap but ', 'those who believe in ', 
'we must focus to ', 'go instead where there is no path ', 'which must be lived to ', 
'but never let yourself ', 'and perhaps it is a good thing for most of us ', 
'but if you do it right ', 'swim the sea ', 'live the life ', 'but we insist on making it ', 
'most wonderful '];
const mesEnd = ['without leaving happier.', 'and hang on.', 'just like everyone else.', 
'by the seeds that you plant.', 'the beauty of their dreams.', 'see the light.', 
'and leave a trail.', 'be understood.', 'be defeated.', 'that it is not.', 'once is enough.', 
'drink the wild air.', "you've imagined.", 'complicated.', 'fairy tale.'];
// Message generated
let message = '';

const selectRandArrayItem = arr => arr[Math.floor(Math.random() * arr.length)];

message += selectRandArrayItem(mesStart);
message += selectRandArrayItem(mesMiddle);
message += selectRandArrayItem(mesEnd);

console.log(message);