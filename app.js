const prompt = require('prompt-sync')();

//mock up database
const usernames = new Map()

const check_database = (user_entry) => {
    
    usernames.set('matt')
    usernames.set('ian')
    usernames.set('asti')
    usernames.set('keith')
    usernames.set('afira')

    usernames.set('abdullah')
    usernames.set('adam')
    usernames.set('amadou')
    usernames.set('angel')
    usernames.set('blake')
    usernames.set('bradley')
    usernames.set('brian')
    usernames.set('britt')
    usernames.set('christopher')
    usernames.set('claire')
    usernames.set('cora')
    usernames.set('david')
    usernames.set('fiona')
    usernames.set('jen')
    usernames.set('joshua')
    usernames.set('justin')
    usernames.set('kayla')
    usernames.set('keith')
    usernames.set('kevin')
    usernames.set('leah')
    usernames.set('michael')
    usernames.set('miles')
    usernames.set('nathaniel')
    usernames.set('nilofar')
    usernames.set('somayeh')
    usernames.set('sophie')
    usernames.set('sufian')
    usernames.set('taihlor')
    usernames.set('tashoi')
    usernames.set('toni')
    usernames.set('zaki')
    usernames.set('jonas')


    //check in the hash map if the lower case version of the user entry exist
    if (usernames.has(user_entry.toLowerCase())) {
        return true
    }
    //user entry does not exist in the mock up database
    return false

}

const add_username_to_database = (user_entry) => {

    usernames.set(user_entry.toLowerCase())
}

let continue_playing = true
let won = 0;
let retry = false
let current_user
do {

    
    let username
 
    if (retry) {
        username = current_user
    } else {
        username = prompt('Cadet what is your name?: ');
        current_user = username
    }
    
    if(!username && retry === false){ //i added 1 guard check an example of validation of user input
        console.log('cadet name cannot be empty')
    } else if (check_database(username) && retry === false) {
        console.log(`username already taken..\n\ndo you want to continue as ${current_user} ?`)
        
        let willTry = prompt('(Y/N): ')

        //ternary operator
        willTry.toLowerCase() === "y" ? retry = true : retry = false


    } else {

        
        retry ? console.log('\n********\nexisting user found\n********\n') : console.log(`\n********\n${current_user} added to database...\n********\n`)
        //save this name so it cannot be use again
        //on the next iteration of the do while loop
        add_username_to_database(username)

        //1. the crash
        console.log(`\nThe Crash\nYou wake up in your wrecked spaceship ${username}, alarms blaring,\nwith limited time to act.`)
        console.log(`\nWhat do you do first ? \n\n1. search the wreckage for emergency oxygen.\n\n2. sprint outside to assess the danger.\n`)
        
        let first_thing_to_do

        //i want to keep prompting to user to enter correct input
        //until first_thing_to_do is a correct value keep asking for input
        while (first_thing_to_do === undefined || first_thing_to_do !== 1 || first_thing_to_do !== 2) {
            first_thing_to_do = prompt("Enter 1 or 2: ")

            if(first_thing_to_do === "1" || first_thing_to_do === "2") break;
        }


        if (first_thing_to_do == 1) {
            console.log(`\n\n\n${username} you find the oxygen tank, but night is approaching faster than expected\ndo you leave the wreckage to search for shelter or stay inside ?\n\n1. leave to find the shelter.\n\n2.stay in the wreckage.\n`)

            let second_thing_to_do

            while (second_thing_to_do === undefined || second_thing_to_do !== 1 || second_thing_to_do !== 2) {
                second_thing_to_do = prompt("Enter 1 or 2: ")
    
                if(second_thing_to_do === "1" || second_thing_to_do === "2"){
                    break;
                }
            }
            

            if(second_thing_to_do === "1") { //use triple equals here
                console.log('\n\nYou encounter dangerous alien creatures in the distance but find a cave.\n\n1. Enter the cave(leads to new challenges inside).\n\n2. Search for a new spot(danger of exposure to elements).\n\n')

                let third_thing_to_do

                while (third_thing_to_do === undefined || third_thing_to_do !== 1 || third_thing_to_do !== 2) {
                    third_thing_to_do = prompt("Enter 1 or 2: ")
        
                    if(third_thing_to_do === "1" || third_thing_to_do === "2") break;
                }

                if(third_thing_to_do == 1){ //loose equality again
                    console.log('\n\nafter a year.. search and rescue team found you in the cave and brought you back to your planet')
                    console.log("\n\nYou survived!\n\nYou Win!\n\n")
                    won++
                } else {
                    console.log(`\n\nwhile searching for new spot you found a glowing mushroom and you ate it then you die\n\n`)
                }
            } else {
                console.log(`\n\nYou survived the night but the risk long term exposure to the environment.\n\n1. Repair the system.\n\n2. Explore further(leads to different encounters)\n\n`)

                let second_thing_to_do //this only affects local scope within else block

                while (second_thing_to_do === undefined || second_thing_to_do !== 1 || second_thing_to_do !== 2) {
                    second_thing_to_do = prompt("Enter 1 or 2: ")
        
                    if(second_thing_to_do === "1" || second_thing_to_do === "2"){
                        break;
                    }
                }
                //repair the system
                if(second_thing_to_do == 1) {
                    console.log('\n\nAfter repairing the system you established connection with your planet and sent the rescue team \n\nyou were rescued after 30 min')
                    console.log("\n\nYou survived!\n\nYou Win!\n\n")
                    won++
                } else {
                    //explore further
                    console.log("\n\nafter 2 months of exploring an asteroid hits the planet.. and you die\n\n")
                }
            }
        } else {
            //sprint outside to asses the danger

            console.log(`\n\nyou see alien creatures approaching. Do you confront the creatures or hide ?\n\n1. Confront them\n\n2. Hide\n\n`)


            let first_thing_to_do //local here in else condition

            //i want to keep prompting to user to enter correct input
            //until first_thing_to_do is a correct value keep asking for input
            while (first_thing_to_do === undefined || first_thing_to_do !== 1 || first_thing_to_do !== 2) {
                first_thing_to_do = prompt("Enter 1 or 2: ")
    
                if(first_thing_to_do === "1" || first_thing_to_do === "2") break;
            }

            if (first_thing_to_do == 1) {
                
                console.log('\n\nYou scare them off but sustain injuries. after 2 hours the creatures poison killed you\n\n')
                console.log('\n\nYou Lose!')
            } else {
                
                //you hide
                console.log(`\n\nYou find a safe hiding spot but lose track of the time\n\nTry to return to the wreckage or stay hidden\n\n1. Return to the wreckage\n\n2.Stay hidden(you find something interesting in the hiding spot)\n\n`)

                let second_thing_to_do //local here on else
                while (second_thing_to_do === undefined || second_thing_to_do !== 1 || second_thing_to_do !== 2) {
                    second_thing_to_do = prompt("Enter 1 or 2: ")
        
                    if(second_thing_to_do === "1" || second_thing_to_do === "2") break;
                }

                if (second_thing_to_do == 1) {
                     console.log('you went to the wreckage and millions of creatures are there but rescue team is there as well after almost 2 hours of war the creatures were eradicated and you return to your home planet safely')
                     console.log("\n\nYou survived!\n\nYou Win!\n\n")
                     won++
                } else {

                    //stay hidden you find something interesting
                    console.log('You survived for the next 4 days but died on the fifth')
                    console.log('\n\nYou Lose!')
                }

            }

        }

        

        //end the cycle
        let will_play_still = prompt ('do you want to continue playing: (Y/N):')



        switch (will_play_still.toLowerCase()) {
            case "y" || "yes" || "yeah" || " " || null:
                //do nothing this will just go back up to the top of do
                //ternary code here
                console.log(`\n********\n${username} you won ${won} time\n********\n`)

                

                //for loop
                let star_string = "";
                for (let star = 1; star <= won ; star++) {
                    star_string += "⭐"
                }
                console.log(`We give you ${won} ${star_string === "" ? "star" : star_string}\n\n\n`)               
                break;
            default:
                console.log('See You next time')
                continue_playing = false
                retry = false
                break;
        }
    }
    
    

} while(continue_playing)


