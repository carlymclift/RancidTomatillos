const fakeUserComments = [
    {
    "comment": "The biggest issue with this robo-drama is the completely unnecessary foul language in its memory bank.",
    "author": "Alex K",
    "movieId": 524047
    },
    {
    "comment": "Amazing film, liked it a lot. I was wondered, that budget of this film is so low (if we are talking about disaster films full of effects), because it doesn't look like cheap film at all. Liked almost everything and definitely will watch once again in the nearest future",
    "author": "Arūnas S",
    "movieId": 524047
    },
    {
    "comment": "I really liked this movie. I think it has really accurately illustrated how people would react to any such event/situation. The pace was good, plot also good and Gerard as always delivers a very believable performance portraying down to earth character, who does what has to done to get his family to safety.",
    "author": "Kipras J",
    "movieId": 524047
    },
    {
    "comment": "Thrilling, emotional and reflective. I and my family enjoyed it as a whole. I personally thought  that Morena Baccarin (Allison Garrity in the movie) was occasionally too superficial (i.e., it was clear she was acting), which weakened some scenes. But overall, it was a great movie.",
    "author": "Walid A",
    "movieId": 524047
    },
    {
    "comment": "Very very good and captivating movie!!! We were on our toes the whole time and the character development was fantastic. Especially relatable during this COVID pandemic, albeit on a grander scale. Highly recommend!",
    "author": "Yujia J",
    "movieId": 524047
    },
    {
    "comment": "Very exciting Movie! I was on the edge of my seat the whole time!",
    "author": "Sandra K",
    "movieId": 606234
    },
    {
    "comment": "The biggest issue with this robo-drama is the completely unnecessary foul language in its memory bank.",
    "author": "Alex K",
    "movieId": 606234
    },
    {
    "comment": "Whoa. That was my reaction after I finished it. Watching the trailer, one would likely compare this movie to Alicia Vikander's Ex Machina. At a glance, this sci-fi also seems to explore the ramifications of a machine developing a consciousness much like a human. At least, that's what it makes you think at first.",
    "author": "Jamie L",
    "movieId": 606234
    },
    {
    "comment": "This movie was so beautiful, heartbreaking and shocking to say the least. I simply couldn't get enough of it and it just gives you this weird and unsettling feeling, and I appreciate it. There is so much we don't know about this world, our brain and consciousness. It's haunting and scary, and this movie just plays with that. Kudos to the team.",
    "author": "Ritika M",
    "movieId": 606234
    },
    {
    "comment": "The best scifi movies in a long time. This is coming from someone who watches scifi a lot. This movie falls in the same catagory as any other black mirror episodes. Ex machina is more fleshed out but this movie goes more into the philosophical aspects of free will, mind-body problem and reality. A must watch.",
    "author": "AS",
    "movieId": 606234
    },
    {
    "comment": "What this movie has achieved with hand drawn animation is in my opinion far ahead of it's time. The amazing synth heavy score by is one of the highlights of this movie and along with the beautiful animation, it's does a brilliant job in highlighting the barbaric nature of the biker gangs and the cruel irony of the conflict and instability of Neo-Tokyo. However, it does not follow a conventional story structure after the first act. Instead of a climax the viewer gets various revelations. ",
    "author": "Alex K",
    "movieId": 149
    },
    {
    "comment": "They don't make films like this anymore. There is a reason why the anime industry went into a crash shortly after this film was produced. Animation studios couldn't reach the bars set by this movie.",
    "author": "Michael B",
    "movieId": 149
    },
    {
    "comment": "This movie is (in my opinion) the best anime of all time. The graphics for this movie are great, especially the time being. This movie is never talked about anymore but deserves to be. If this movie wasn't made then we wouldn't be talking about anime today. Its violence and action are astonishing, it is very complex, and overall, maybe the best movie of all time.",
    "author": "Liam H",
    "movieId": 149
    },
    {
    "comment": "The film had great animation, but the story seemed lacking. I believe they could have salvaged the original story if they broke it into two parts; The first three books and then the last three books. There would be plenty of action in both to make a compelling story that the audience could actually understand. Overall, underwhelming, but still worth the praise it gets.",
    "author": "Joseph M",
    "movieId": 149
    },
    {
    "comment": "I think this is one the best anime films I have ever seen. My art teacher recommended me this film, since it has been a cultural icon of animation and art at the time. Thanks to my teacher, I was so glad I watch this movie.",
    "author": "Aaron C",
    "movieId": 149
    },
    {
    "comment": "This version, featuring Colin Firth as the haunted uncle, hits the same notes as the 1911 novel and previous films, and that’s fine for this uncertain moment.",
    "author": "Lovia G",
    "movieId": 521034
    },
    {
    "comment": "I have never watched an adaptation of Frances Hodgson Burnett’s novel and repeatedly thought, “Is someone going to get murdered?!” Until now.",
    "author": "Alex K",
    "movieId": 521034
    },
    {
    "comment": "The film has two modes: eyes lit with wonder as the fairy-dust music sparkles and swells, and overly moody haunted-house trepidation",
    "author": "Johnny O",
    "movieId": 521034
    },
    {
    "comment": "This movie does not even come close to being 'an adaption' of The Secret Garden. It takes the three main characters and places them in a different era, different story line, different world all together. So very disappointed to have been sitting with my two children to watch this after having savored the book together and anxiously awaiting the film. My five-year old kept looking at me and exclaiming, 'Mom, this is NOT the book!'",
    "author": "Ana M",
    "movieId": 521034
    },
    {
    "comment": "The book was fantastic with a lot of description. This book is one of my favourite books! I also have seen all the movies. I think Frances Hodgson Burnett did a fantastic job!",
    "author": "Pui M",
    "movieId": 521034
    },
    {
    "comment": "You’ll want to give Pete Davidson a hug after watching his revealing new comedy",
    "author": "Alex K",
    "movieId": 579583
    },
    {
    "comment": "Judd Apatow’s film should be a meatier Oedipal comedy, but it’s unwilling to explore the tragedy just below its surface.",
    "author": "Wesley M",
    "movieId": 579583
    },
    {
    "comment": "The King of Staten Island is funny and authentic and painful and problematic and offensive.",
    "author": "Adam H",
    "movieId": 579583
    },
    {
    "comment": "Tackling some of Davidson's real-life troubles, this touching, hilarious dramedy is long but breezy, weighty but easy, with an excellent lead performance and a great group of characters.",
    "author": "Jeffrey M",
    "movieId": 579583
    },
    {
    "comment": "I have only seen Pete Davidson on SNL so I was pleasantly surprised by his acting capability.  The movie is stated to be semi-biographical but I don't think it is easy to play yourself in a film. Everyone in this movie did a great job especially Marissa Tomei and Bill Burr.",
    "author": "Lee C",
    "movieId": 579583
    },
    {
    "comment": "So, Scoob has finally come out, although not as expected. The movie is a mixed bag to me. I have a lot of fun watching it, especially since I love Hanna-Barbera and got a kick out of the subtle, blink-and-you'll-miss-it references and cameos. ",
    "author": "Alex K",
    "movieId": 385103
    },
    {
    "comment": "This animated reboot of the classic cartoon franchise helps bring the goofy Scooby gang to a new generation of kids who will enjoy the shenanigans of these 'meddling kids' and their talking dog.",
    "author": "Sandie A",
    "movieId": 385103
    },
    {
    "comment": "Ruh-roh. The Scooby-Doo sleuths are at it again, this time in a frantic overhaul maladroitly designed to make the Hanna-Barbera franchise seem fresh.",
    "author": "Ben K",
    "movieId": 385103
    },
    {
    "comment": "Scoob! is a movie that doesn’t quite know what it wants to be when it grows up",
    "author": "Adam H",
    "movieId": 385103
    },
    {
    "comment": "The rest is basically corporate synergy, canine shenanigans and hot air. Zoinks, indeed.",
    "author": "David F",
    "movieId": 385103
    },
    {
    "comment": "David Ayer’s generic gangland thriller presents a cartoonishly exaggerated showdown between good and evil.",
    "author": "Jeannette C",
    "movieId": 531499
    },
    {
    "comment": "Despite its vivid L. A. backdrop and its interesting, dedicated performances, this crime drama is both too wearily familiar and too unrelentingly vicious to really succeed.",
    "author": "Alex K",
    "movieId": 531499
    },
    {
    "comment": "To be honest I didn’t know what think going it this movie but truth be told it’s really good Shia and Bobby Soto are great together. They have a great cemetery on screen, now I do t care what others have said about Shia. He plays his role great. I don’t want to get into spoilers, Ayer has done it again, he push the limits on what a movie can do in an action movie",
    "author": "Jeremy E",
    "movieId": 531499
    },
    {
    "comment": "Shia LaBeouf is great!! He legit gets how a white boy in a Chicano vibe hood talks & acts. This movie is very raw, and real. This is how us Hispanic people speak and this is how the streets are. Critics in Hollywood obviously want a more cartoon effect than realistic. Shia is such an underdog I’m sure this movie will get its recognition it deserves. It was intense had me on my feet, 👏🏼",
    "author": "Veronica R",
    "movieId": 531499
    },
    {
    "comment": "Honestly if you are looking for a movie that you are just watching without having to pay attention this is the best movie for you. Quite simple all the way from the cliche storyline down to the characters. Shia lebouf however did his simple role the best he could given the simple character he had to play. I give it a 2/10 and honestly that’s being generous.",
    "author": "Jack B",
    "movieId": 531499
    },
    {
    "comment": "An intense, complex story, but it's always coherent, imaginative, and entertaining.",
    "author": "Jeffrey M",
    "movieId": 27205
    },
    {
    "comment": "Go, get intrigued and push the boundaries of your mind.",
    "author": "Alex K",
    "movieId": 27205
    },
    {
    "comment": "Driving home from a screening of Inception the other night, my husband said to me, I don't know how you're going to write about this movie",
    "author": "Sify M",
    "movieId": 27205
    },
    {
    "comment": "I'll say no more, except that Inception rewards the attention it demands",
    "author": "Peter T",
    "movieId": 27205
    },
    {
    "comment": "Inception is one of the best movies I have ever seen . Nolan directed this movie to the best of his ability. I don't think anyone would have done a better job than him. This movie talks about the very old concept of 'a dream within a dream' which is hardly known about. It's  a great thriller and is a must watch with a cast of Leonardo Dicaprio , Tom Hardy and Ellen Page!",
    "author": "Mannat J",
    "movieId": 27205
    },
    {
    "comment": "It is amazing. The way the story is written is truly an anime movie worth watching, I just can't wait to see my favorite characters in action. This is just wonderful",
    "author": "Anime F",
    "movieId": 390635
    },
    {
    "comment": "The best story, the best fighting, best art style. The greatest thing I've seen in 2020 so far.",
    "author": "Dennis W",
    "movieId": 390635
    },
    {
    "comment": "The movie of fate stay night heaven feel is so good its worth watching",
    "author": "Alex K",
    "movieId": 390635
    },
    {
    "comment": "The movie irritated me because iI simply hate Sakura and her behaviour",
    "author": "B H",
    "movieId": 390635
    },
    {
    "comment": "The sale of a Tuscan villa forces a grieving widower and his troubled son to reconnect in this trite comic drama.",
    "author": "Jeannette C",
    "movieId": 606234
    },
    {
    "comment": "The sale of a Tuscan villa forces a grieving widower and his troubled son to reconnect in this trite comic drama.",
    "author": "Alex K",
    "movieId": 659991
    },
    {
    "comment": "Real-life father and son Neeson and Richardson give affecting performances in this predictable but poignant dramedy set in the gorgeous Tuscan hills",
    "author": "Sandie A",
    "movieId": 659991
    },
    {
    "comment": "Neeson and Richardson, rising above the script's mawkish muck to grasp at something genuine, are still something to see.",
    "author": "Peter T",
    "movieId": 659991
    },
    {
    "comment": "I loved it. I hadn't seen a trailer or even read what the movie was about. I saw a brief mention of Liam Neeson being in a movie available August 7th and asked for the Xfinity pay per view. I laughed out loud a lot. Then tried not to cry as it got down to the nitty gritty backstory. The ending is fabulous.",
    "author": "Phyllis T",
    "movieId": 659991
    },
    {
    "comment": "I loved it, made me want to save up and move to italy, made me laugh, made me cry! Liam Neesons charming and calm voice is so refreshing the whole stpry is beautiful!! Love love and would definitely pay to watch it again!!",
    "author": "Ashley H",
    "movieId": 659991
    },
    {
    "comment": "What keeps you rapt in Parasite is the visual wit — every shot distills the movie’s themes — and the richness of the characters and performances",
    "author": "Alex K",
    "movieId": 496243
    },
    {
    "comment": "A miracle of a film. It feels like Bong Joon-ho’s already extraordinary career has been building to this: a riotous social satire that’s as gloriously entertaining as it is deeply sardonic.",
    "author": "Sandie A",
    "movieId": 496243
    },
    {
    "comment": "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
    "author": "Peter T",
    "movieId": 496243
    },
    {
    "comment": "The director is in full control of his art and at no point lets any tread fall lose",
    "author": "Phyllis T",
    "movieId": 496243
    },
    {
    "comment": "Parasite is highly intriguing and thrilling with a lot of action happening throughout its running time. No wonder this black comic thriller won numerous awards, including the prestigious Oscar for The Best Film, The Best Director and so on.",
    "author": "Ashley H",
    "movieId": 496243
    },
    {
    "comment": "Ethan Hawke plays the melancholy visionary Nikola Tesla in Michael Almereyda’s meditative anti-biopic",
    "author": "Alex K",
    "movieId": 517412
    },
    {
    "comment": "For better or worse, Nikola Tesla (as he’s depicted here) is consumed by his quest to transform the world as we know it.",
    "author": "Sandie A",
    "movieId": 517412
    },
    {
    "comment": "I wish Tesla had invented a time machine so I could get this hour and 42 minutes back of my life.  There was one second of happiness when Jim Gaffigan appeared, but sadness quickly returned as I realized that he- like everything else in the movie- was slowly being pulled into the quicksand (slowsand in this case) that was this “movie”.  I award you no points, and may God have mercy on your soul.",
    "author": "Peter T",
    "movieId": 517412
    },
    {
    "comment": "Absolutely amazing, Ethan slayed that performance!. I feel like I knew Tesla now as a kind selfless man. I also appreciated the new perspective on Edison.",
    "author": "Phyllis T",
    "movieId": 517412
    },
    {
    "comment": "I was struggling to finish the movie and reach its end. It is so boring and poorly made. Such a great scientist to be humiliated by such a movie is really unforgivable. This is one of the worst movies I have ever seen.",
    "author": "Ashley H",
    "movieId": 517412
    },
    {
    "comment": "Pretty boring film, very predictable and not much action. About 5 people walked out the cinema, I would’ve too but thought I’d stay to see if it got any better but it didn’t really. Would not recommend.",
    "author": "Alex K",
    "movieId": 522444
    },
    {
    "comment": "the movie in the beginning is very thrilling and intense, but at the ending it’s a bit messed up like it’s seems a bit boring and the crocodile at the last part looks sooo fake. you can watch it but don’t have high expectations of it because the ending not thrilling at all.",
    "author": "Sandie A",
    "movieId": 522444
    },
    {
    "comment": "Lame movie. Not so violent. I don't even know why it's rated 18+. Story line sucks. Barely get to see the crocodiles",
    "author": "Peter T",
    "movieId": 522444
    },
    {
    "comment": "Such a horrible attempt at one of the most overflogged themes in horror genre.",
    "author": "Phyllis T",
    "movieId": 522444
    },
    {
    "comment": "A waste of time. They should have added more scenes to it.",
    "author": "Ashley H",
    "movieId": 522444
    },
    {
    "comment": "Sam Mendes never screams for your attention, he earns it over time",
    "author": "Alex K",
    "movieId": 530915
    },
    {
    "comment": "World War I is perhaps unequaled in its horrific brutality. 1917 takes us into that horror and doesn’t let us out of it for two hours.",
    "author": "Sandie A",
    "movieId": 530915
    },
    {
    "comment": "About 15 minutes in to this movie, it dawns on you that this is something uniquely brilliant; by the end, it's clear that Sam Mendes has made one of the best films of 2019.",
    "author": "Peter T",
    "movieId": 530915
    },
    {
    "comment": "‘1917’ is tense, captivating, meticulous, horrifying and stirring.",
    "author": "Phyllis T",
    "movieId": 530915
    },
    {
    "comment": "A moving depiction of a snapshot event in the mayhem of World War I, focusing on friendship, loyalty and honour. For me, the terrifying extremes of military camaraderie and heroic solitude come out powerfully and the brutal struggle against overwhelming forces is so skilfully depicted",
    "author": "Ashley H",
    "movieId": 530915
    },
    {
    "comment": "The start to the Harry Potter film series is filled with visual splendor, valiant heroes, spectacular special effects, and irresistible characters. It's only fair to say that it's truly magical.",
    "author": "Alex K",
    "movieId": 671
    },
    {
    "comment": "The movie is quite faithful to the book—a smart move on the part of filmmakers. But that leaves us dealing with the same questions that have always lurked around the boy named Harry.",
    "author": "Sandie A",
    "movieId": 671
    },
    {
    "comment": "This is probably one of my all-time favorite book adaptations. The CGI may be a little dated and sometimes the acting, especially from the children, can be a bit off, but other than that, I love it. Remarkably faithful to the book, excellent directing from Chris Columbus despite most of his film experience rooting in comedies. The music is not only my favorite John Williams soundtrack, it's one of my favorite film soundtracks of all time.",
    "author": "Peter T",
    "movieId": 671
    },
    {
    "comment": "Well this is the best movie ever. l remember I was 13 at the time I watched it and I couldn't resist my self seeing all the  7 movies and reading all the seven books. Since then I have been a very huge fan and a potterhead⚡. And these many words are very little to tell you how much I love these movies.",
    "author": "Phyllis T",
    "movieId": 671
    },
    {
    "comment": "Good. I thought that it was unpredictable, twists around every turn. The characters were relatable and funny, and the plot was engaging. Worth a read. Obviously everyone has different tastes, yet this series is a hit for everyone. Try it; you won’t regret it!",
    "author": "Ashley H",
    "movieId": 671
    },
    {
    "comment": "Whatever point The Hunt may want to make, or whatever value it might hope to have, is pretty much obliterated by its violence.",
    "author": "Alex K",
    "movieId": 514847
    },
    {
    "comment": "Insanely gory but also fiendishly funny, this clever dark satire takes a familiar scenario and uses it to boldly skewer both red and blue Americans, painting both sides as equally absurd.",
    "author": "Sandie A",
    "movieId": 514847
    },
    {
    "comment": "Beautifully performed and tough as nails, Vinterberg's social drama could not be any more timely.",
    "author": "Peter T",
    "movieId": 514847
    },
    {
    "comment": "The cinematography of killing spree with blood and violence is amazing. The movie runs in fast paced manner which makes you intrigued watching it as the main plot starts from right first frame. Also, the performance of all cast is good. It doesn't boast of some great storyline yet it engages you as viewer. The direction is also good.",
    "author": "Phyllis T",
    "movieId": 514847
    },
    {
    "comment": "I really enjoyed this movie. It does take shots at the far left and far right of modern day culture. It also shows how much weight the internet has in this day and age, and how random rumors online can grow and cause real world consequences. ",
    "author": "Ashley H",
    "movieId": 514847
    },{
    "comment": "This movie falls for the frustrating reasons that often trip up filmmakers when making biopics -- i. e. , not quite knowing where the focus lies.",
    "author": "Alex K",
    "movieId": 480857
    },
    {
    "comment": "No one can say 'Radioactive' takes a narrow, or sanitized, view of its subject, but the fallout from this expansiveness is incoherence.",
    "author": "Sandie A",
    "movieId": 480857
    },
    {
    "comment": "Marie Curie broke through many barriers for women in science, and Radiation tells her passionate, brave, flawed story.",
    "author": "Peter T",
    "movieId": 480857
    },
    {
    "comment": "Absolutely incredible movie, I still remember reading Madam Curie's life story as a child, being inspired by her work to pursue in Science education. All her attributes are well portrayed in this movie, a wonderful dramatic story line for sure. Loved it!",
    "author": "Phyllis T",
    "movieId": 480857
    },
    {
    "comment": "The most accurate movie about the life and career of curies. A righteous successor for the western viewpoint of everything and actually very loyal and a complete match for the best of the movies in Hollywood.",
    "author": "Ashley H",
    "movieId": 480857
    },{
    "comment": "This Russian sci-fi horror picture strongly advises that what you find in space should stay there.",
    "author": "Alex K",
    "movieId": 594718
    },
    {
    "comment": "Once the blood starts to fly, this Russian horror film drowns in its own vat of hemoglobin",
    "author": "Sandie A",
    "movieId": 594718
    },
    {
    "comment": "A creature feature with flair.",
    "author": "Peter T",
    "movieId": 594718
    },
    {
    "comment": "In a concrete Russian military facility, no-one can hear you scream. Sputnik offers obvious time-honoured sci-fi/horror shenanigans with a few fun tweaks to the formula",
    "author": "Phyllis T",
    "movieId": 594718
    },
    {
    "comment": "Overall a really great film. Wonderful acting and a unique way to bring human and alien together. The ending was anti-climactic, which is why I gave 4 stars. But seeing as how I don't really know how I wanted it to end, I can't really critique it right?!",
    "author": "Ashley H",
    "movieId": 594718
    },{
    "comment": "Marking Dave Franco's directorial debut, this sharp, engrossing horror-thriller gets by with no supernatural elements, relying entirely on scarily believable human behavior and intrusive technology.",
    "author": "Alex K",
    "movieId": 587496
    },
    {
    "comment": "Dave Franco’s directing debut puts four friends in peril at a vacation property.",
    "author": "Sandie A",
    "movieId": 587496
    },
    {
    "comment": "There's some crafty artistry at work in 'The Rental' and also some fairly standard pandering, which feels like a violation of the movie's better instincts.",
    "author": "Peter T",
    "movieId": 587496
    },
    {
    "comment": "The only time I was thrilled was when it was finally over. This is the modern day Vacancy. The film tells you who the killer is within the first 30 mins. All it takes is some listening skills, therefore everything that comes after is by and large the most predictable dumpster fire ever.",
    "author": "Phyllis T",
    "movieId": 587496
    },
    {
    "comment": "Creepy... Chilling... This movie made you really think 'what if' and honestly about half way through it gets good. A slow start, but in the end it hit the high point and kept me at the edge of my seat. If you got nothing better to do at night, give this movie a go.",
    "author": "Ashley H",
    "movieId": 587496
    },{
    "comment": "A ride-share driver turns serial killer in this depressing social-media thriller",
    "author": "Alex K",
    "movieId": 653598
    },
    {
    "comment": "While its themes are nothing new, this demented, envelope pushing satire somehow balances its sadistic violence with smart satire and with Keery's lovable, lunatic puppy dog performance.",
    "author": "Sandie A",
    "movieId": 653598
    },
    {
    "comment": "This movie is just crazy! I suppose it's relatable to people and their dependency on social media. It's gripping and demented and it did get me to shout out towards the screen a few times. So.....",
    "author": "Peter T",
    "movieId": 653598
    },
    {
    "comment": "A very fun dark comedy about the worst aspects of the internet. Joe Keery's performance as a fame-hungry psycho is excellent, he really captured the awkward energy of a wanna social media influencer. Deserves a better poster.",
    "author": "Phyllis T",
    "movieId": 653598
    },
    {
    "comment": "This is definitely the most unique movie I have seen in a bit. The casting is great, the plot is very interesting. I would definitely recommend watching.",
    "author": "Ashley H",
    "movieId": 653598
    },
    {
    "comment": "James Marsden appears to be the only one interested in making this movie half-way interesting but even that isn't enough of a push for a 'look-see' here!",
    "author": "Alex K",
    "movieId": 454626
    },
    {
    "comment": "Watching Carrey is an absolute delight; his comedic genius exudes more wattage than Sonic's moments of heated emotion -- and Sonic's outbursts cause power outages.",
    "author": "Sandie A",
    "movieId": 454626
    },
    {
    "comment": "This big-screen take on Sega’s anthropomorphized cobalt cannonballer is mostly cute and cuddly.",
    "author": "Peter T",
    "movieId": 454626
    },
    {
    "comment": "The plot of Sonic The Hedgehog is paper-thin and the films tone strikes a shrewd balance that will certainly allow it to play well across a broad spectrum of audiences",
    "author": "Phyllis T",
    "movieId": 454626
    },
    {
    "comment": "It was a charming movie about being true to yourself. I don't perceive any fat shaming, as the main character is happy to be big and proud of it and her love interest comes to accept her for it by the end of the movie. It was funny and witty and for an indie movie, can easily stand on its own as a classic to be remembered. ",
    "author": "Alex K",
    "movieId": 486589
    },
    {
    "comment": "Although this movie appears lacking to critics in many aspects, this movie actually deserves more credit than it was given. It teaches and shows the younger audience two things: TRUE BEAUTY is found within and... TRUE LOVE will never be about looks.",
    "author": "Sandie A",
    "movieId": 486589
    },
    {
    "comment": "Honestly, I really enjoyed this animation. There are many reasons as to why I liked this film, a few of the reasons are: it's family friendly, it's very neat and the visuals and graphics of the movie are stunning and awe inspiring, it's cute, adorable, and funny, and it has a strong story plot.",
    "author": "Peter T",
    "movieId": 486589
    },
    {
    "comment": "Charming, funny, sweet, sincere, and surprisingly honest about society. I adore this movie. Not only does it have stunning visuals and character designs and feature a beautiful, adventuresome score by Geoff Zanelli, it is so RARE in media to see a plus-sized girl who loves herself and is confident in who she is from the very beginning, with no real desire to change herself (despite what you may think at first glance of this movie).",
    "author": "Phyllis T",
    "movieId": 486589
    },
    {
    "comment": "I ADORE THIS MOVIE! The message is awesome, the characters are well-designed, and I loved that each supporting character has their own personality and isn't just a flat trope. ",
    "author": "Ashley H",
    "movieId": 486589
    },
    {
    "comment": "Absolutely amazing. A very captivating movie with a brilliantly written script, directed to the highest level and executed to perfection by a mostly unknown cast. Nat Wolff has a very bright future ahead based on the talent showcased here.",
    "author": "Alex K",
    "movieId": 489326
    },
    {
    "comment": "Its kind of cool approach taken by the Norwegian Government to promote their iconic culture, heritage and history.",
    "author": "Sandie A",
    "movieId": 489326
    },
    {
    "comment": "Mortal definitely strays from the typical hero narrative because it's not a superhero film. You won't find state-of-the-art graphics often seen on Marvel and DC films but you'll get a palpable story line instead. It is abundant with the seriousness that the Marvel franchise lacks. ",
    "author": "Peter T",
    "movieId": 489326
    },
    {
    "comment": "Was great! Don't know what movie the negative reviews were watching.. I think as soon as you throw subtitles in a movie, it upsets the mindless masses.",
    "author": "Phyllis T",
    "movieId": 489326
    },
    {
    "comment": "Cracking stuff from Norway. Profundity and entertainment. Thor legend updated and brought to life. Almost believable. Terrific performance from Nat Wolff. Top drawer!",
    "author": "Ashley H",
    "movieId": 489326
    },
]

export default fakeUserComments