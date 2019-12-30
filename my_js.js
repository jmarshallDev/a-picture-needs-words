//localStorage.clear();
if(localStorage.getItem('storyArray') == null){
  localStorage.setItem('storyArray', JSON.stringify([]));
}

let titleWordLen = 20;
function checkTitle(obj){
 var len = obj.value.split(/[\s]+/);
 document.getElementById('titleWordCounter').innerHTML = 'Title Word Count: ' + (len.length-1);
  if(len.length > wordLen){
      obj.oldValue = obj.value!=obj.oldValue?obj.value:obj.oldValue;
      obj.value = obj.oldValue?obj.oldValue:"";
      return false;
  }
return true;
}

var wordLen = 750; // Maximum word length
  function checkWordLen(obj){
   var len = obj.value.split(/[\s]+/);
   document.getElementById('wordCounter').innerHTML = 'Story Word Count: ' + (len.length-1);
    if(len.length > wordLen){
        obj.oldValue = obj.value!=obj.oldValue?obj.value:obj.oldValue;
        obj.value = obj.oldValue?obj.oldValue:"";
        return false;
    }
  return true;
}

document.getElementById('textTitle').addEventListener('input', function(e){
		checkTitle(document.getElementById('textTitle'));
	}, false);

document.getElementById('textTitle').addEventListener('COMContentLoaded', function(e){
		checkTitle(document.getElementById('textTitle'));
	}, false);

document.getElementById('textTitle').addEventListener('load', function(e){
		checkTitle(document.getElementById('textTitle'));
	}, false);

document.getElementById('userText').addEventListener('input', function(e){
		checkWordLen(document.getElementById('userText'));
	}, false);


document.getElementById('userText').addEventListener('DOMContentLoaded', function(event){
  		checkWordLen(document.getElementById('userText'));
  	}, false);


document.getElementById('userText').addEventListener('load', function(event){
    		checkWordLen(document.getElementById('userText'));
    	}, false);

function saveText() {
  if(checkWordLen(document.getElementById('userText')) && checkTitle(document.getElementById('textTitle'))) {
    let storyArray = JSON.parse(localStorage.getItem('storyArray'));
    storyArray.push(document.getElementById("textTitle").value);
    storyArray.push(document.getElementById("userText").value);
    localStorage.setItem('storyArray', JSON.stringify(storyArray));
    document.getElementById("textTitle").value = '';
    document.getElementById('titleWordCounter').innerHTML = 'Title Word Count: ' + 0;
    document.getElementById("userText").value = '';
    document.getElementById('wordCounter').innerHTML = 'Story Word Count: ' + 0;
    alert('You have successfully submitted your story!');
  }
  else if(!checkWordLen(document.getElementById('userText'))){
    alert("You cannot submit a story with more than " + wordLen + " words. Sorry, mate.")
  }
  else if(!checkTitle(document.getElementById('textTitle'))){
    alert("You cannot submit a title with more than " + titleWordLen + " words. Sorry, mate.")
  }
  else{
    alert("You cannot submit a story with more than " + wordLen + " words, or a title with more than " + titleWordLen + " words. Sorry, mate.")
  }
}

function viewStories() {
  document.getElementById('communityStory').innerHTML = '';
  let storyArray = JSON.parse(localStorage.getItem('storyArray'));
  for (let i = storyArray.length - 2; i >= 0; i-=2) {
    document.getElementById('communityStory').innerHTML = document.getElementById('communityStory').innerHTML + '<br><br>' + '<center>' + '<strong>' + storyArray[i] + '</strong>' + '</center>';
    document.getElementById('communityStory').innerHTML = document.getElementById('communityStory').innerHTML + '<br>' + storyArray[i+1];
  }
}
//This is entirely temporary. The best story should be chosen, not the newest story
//An upvoting system still needs to be developed to keep track of the best story from the week.
