   $(document).ready(function(){

  var question_number=1

   	var question_1= {
   		question:'What year was Yosuke born?',
   		choice_A:'1992',
   		choice_B:'2333',
   		choice_C:'2000',
   		choice_D:'1990',
   		choice_E:'1989',
   		explanation:'Yosuke was born on 24th of August in the year of 1990'
   	}



   	var question_2= {
   		question:'What City was he born?',
   		choice_A:'Seattle',
   		choice_B:'Brisbane',
   		choice_C:'Tokyo',
   		choice_D:'Sendai',
   		choice_E:'Sao Paulo',
   	}



   	var question_3= {

   		question:' What was the name of Yosuke’s former band?',
   		choice_A:'The Robber Ducks',
   		choice_B:'Kind of Blind',
   		choice_C:'The Young Grandmas',
   		choice_D:'Green Day',
   		choice_E:'Sum 40 Hundred',
   		explanation:' His former Ska Punk band was called Kind of Blind, probably because of the fact that he can\'t see a thing without his glasses'

   	}

   
   	var question_4= {

   		question:' What computer programming language and framework is Yosuke working on now? ',
   		choice_A:'Node Javascript',
   		choice_B:'Python-Django',
   		choice_C:'Zeros and One',
   		choice_D:'Ruby on Rails',
   		choice_E:'Swift',
   		explanation:'He is actually working on Node Javascript although he is working with Python on the side'

   	}

   	
   	var question_5= {

   		question:' What is Yosuke’s favorite Christian band?',
   		choice_A:'Hillsong United',
   		choice_B:'Chris Tomlin',
   		choice_C:'Newsboys',
   		choice_D:'Jesus Culture',
   		choice_E:'Kings Kaleidoscope',
   		explanation:' The Seattle born Kings Kaleidoscope is his favorite band because of it\'s musical uniqueness and it\'s lyrical genious'

   	}

   	  

   	var question_6= {

   		question:' His favorite book in the Bible?  ',
   		choice_A:'John',
   		choice_B:'Romans',
   		choice_C:'Psalms',
   		choice_D:'Genesis',
   		choice_E:'Proverbs',
   		explanation:'The Psalms were honest cries of the people of God , in response to the ups and downs of life. In it are songs of struggles and songs of praise that are still being used to this day. Because God never changes and never fails to hear the cry of His people.'

   	}




   	var question_7= {

   		question:' What is the name of his desktop computer?',
   		choice_A:'Green-Box',
   		choice_B:'GreenLantern',
   		choice_C:'TC-KJC-1000',
   		choice_D:'GHHJ_2015',
   		choice_E:'My Gaming Computer',
   		explanation:' The Computer is called TC-KJC-1000 as an acronym for ...... hmmmm you should just ask him'

   	}

   		
     var question_8= {

   		question:' What is the name of the college ministry he is in? ',
   		choice_A:'The Avengers',
   		choice_B:'Expression',
   		choice_C:'Rise',
   		choice_D:'Hope',
   		choice_E:'Core',
   		explanation:' The name of the ministry is Rise His Fellowship or Rise for short, founded in 2012. Rise is a group of college age & young adults intended to study the Bible, know Jesus and spread the gospel in Seattle'

   	}

   	var question_9= {

   		question:'If he owns a self-portrait of somebody, who is it of?',
   		choice_A:'Sean Bunch',
   		choice_B:'Of himself',
   		choice_C:'Bob Marley',
   		choice_D:'His Mom',
   		choice_E:'His Dad',
   		explanation:' The portrait is of his friend and house-mate Sean behind a window frame.It was given by Sean for Christmas and is part of his room\'s decoration'

   	}

   	
   	var question_10= {

   		question:' If you were to align his name, each with its meanings and origins what would it look like? ',
   		choice_A:'Fire Dragon Killer',
   		choice_B:'TheOne ThatSucks AtquestionMaking',
   		choice_C:'Valiant Man of the Field',
   		choice_D:'Race Car Driver Burning Piano Player Something Horse',
   		choice_E:'His names have no meaning duh',
   		explanation:' Ayrton was a race car Driver, Yosuke is a jazz musician that plays piano while the piano is on fire and Hishinuma is.....something...something..horse....'

   	}








   	$('.welcome button').click(function(){

    $('.welcome').hide();

    $('.question-box').show();

    if(question_number == 1) {
    	current_question(question_1.question,question_1.choice_A,question_1.choice_B,question_1.choice_C,question_1.choice_D,question_1.choice_E);

    } 
   
    
   	})

   	function current_question(question, choiceA, choiceB, choiceC , choiceD , choiceE){

	$('.question-box h1').text(question);
	$('.list-choice-a').text(choiceA);
	$('.list-choice-b').text(choiceB);
	$('.list-choice-c').text(choiceC);
	$('.list-choice-d').text(choiceD);
	$('.list-choice-e').text(choiceE);


       }

	var selected;
      
     
       $('.question-choice').click(function(){

            $('.question-choice').removeClass('selected')
            $(this).toggleClass('selected')

            $('.submit-button').show();

 	     selected = $(this).find('li').text()



       })

     

       $('.submit-button').click(function(){



       	event.preventDefault();

      

       	$('.question-box').hide();

       		$('.answer-evaluator').show();

       		$('.answer-evaluator button').show();

       			if(question_number==1){
       				evaluator(question_1.choice_D,question_1.choice_E,question_1.choice_A,question_1.choice_C,question_1.choice_B,question_1.explanation)
				}
				if(question_number==2){
					evaluator(question_2.choice_E,question_2.choice_D,question_2.choice_C,question_2.choice_A,question_2.choice_B,question_2.explanation)
				}
				if(question_number==3){
						evaluator(question_3.choice_B,question_3.choice_A,question_3.choice_C,question_3.choice_D,question_3.choice_E,question_3.explanation)

				}
				if(question_number==4){
					   	evaluator(question_4.choice_A,question_4.choice_B,question_4.choice_D,question_4.choice_E,question_4.choice_C,question_4.explanation)

				}
				if(question_number==5){
					 	evaluator(question_5.choice_E,question_5.choice_A,question_5.choice_B,question_5.choice_D,question_5.choice_C,question_5.explanation)
				}
				if(question_number==6){
					
   						evaluator(question_6.choice_C,question_6.choice_B,question_6.choice_A,question_6.choice_D,question_6.choice_E,question_6.explanation)

				}
				if(question_number==7){
						evaluator(question_7.choice_C,question_7.choice_B,question_7.choice_A,question_7.choice_D,question_7.choice_E,question_7.explanation)

				
				}
				if(question_number==8){
					evaluator(question_8.choice_C,question_8.choice_B,question_8.choice_D,question_8.choice_A,question_8.choice_E,question_8.explanation)
				}
				if(question_number==9){
						evaluator(question_9.choice_A,question_9.choice_D,question_9.choice_E,question_9.choice_B,question_9.choice_C,question_9.explanation)
					
				}
				if(question_number==10){
						evaluator(question_10.choice_D,question_10.choice_C,question_10.choice_E,question_10.choice_D,question_10.choice_A,question_10.explanation)

					
				}
       	
       	console.log(selected)

       })


       function evaluator( correct, good, okay, notgood , wrong , explanation){

       	var points;


       		if(selected==correct){	

       			$('.answer-evaluator h1').text('Correct!');

       			points=10 ;
       			console.log( 'you have now :' + points + 'points');

       		     }

       			else if (selected==good ){ 

       				$('.answer-evaluator h1').text('You were close!');
       				points=5}

       				else if (selected==okay){
       					$('.answer-evaluator h1').text('Not quite')
       					points=3}

       					else {

       						$('.answer-evaluator h1').text('Sorry, wrong answer :( !')
       						points=0
       					}
       			 
       		

          $('.answer-evaluator h2').text('The Right Answer was:'+correct+ '!')

          $('.answer-evaluator p').text(explanation)


          $('.answer-evaluator h3').text('You have now:'+ points +' points!')

       }


       $('.answer-evaluator button').click(function(){

       	$('.answer-evaluator').hide();

    	$('.question-box').show();

    	question_number+=1

    	console.log(question_number)

    	if(question_number==2){
    			$('.question-choice').removeClass('selected')
    		current_question(question_2.question,question_2.choice_A,question_2.choice_B,question_2.choice_C,question_2.choice_D,question_2.choice_E);

    	}

    	else if (question_number == 3) {
    		$('.question-choice').removeClass('selected')
    	current_question(question_3.question,question_3.choice_A,question_3.choice_B,question_3.choice_C,question_3.choice_D,question_3.choice_E);
    }
    		else if (question_number == 4) {
    			$('.question-choice').removeClass('selected')
    			current_question(question_4.question,question_4.choice_A,question_4.choice_B,question_4.choice_C,question_4.choice_D,question_4.choice_E)
    		}
    			else if (question_number == 5) {
    				$('.question-choice').removeClass('selected')
    				current_question(question_5.question,question_5.choice_A,question_5.choice_B,question_5.choice_C,question_5.choice_D,question_5.choice_E)
    			}
    				else if (question_number == 6) {
    					$('.question-choice').removeClass('selected')
    					current_question(question_6.question,question_6.choice_A,question_6.choice_B,question_6.choice_C,question_6.choice_D,question_6.choice_E)
    				}
    					else if (question_number == 7) {
    						$('.question-choice').removeClass('selected')
    						current_question(question_7.question,question_7.choice_A,question_7.choice_B,question_7.choice_C,question_7.choice_D,question_7.choice_E)
    					}
    						else if (question_number == 8) {
    							$('.question-choice').removeClass('selected')
    							current_question(question_8.question,question_8.choice_A,question_8.choice_B,question_8.choice_C,question_8.choice_D,question_8.choice_E)
    						}
    							else if (question_number == 9) {
    								$('.question-choice').removeClass('selected')
    								current_question(question_9.question,question_9.choice_A,question_9.choice_B,question_9.choice_C,question_9.choice_D,question_9.choice_E)
    							}
    								else if (question_number == 10) {
    									$('.question-choice').removeClass('selected')
    									current_question(question_10.question,question_10.choice_A,question_10.choice_B,question_10.choice_C,question_10.choice_D,question_10.choice_E)
    								}



    
       })





	
      })






