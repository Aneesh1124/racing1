class Form {
    constructor(){
        
    }
    display(){
        var title = createElement('h2')
        title.html("CarRacing")
        title.position(430,0)
        var input = createInput("Name")
        input.position(750,150)
        var button = createButton("PLAY")
        button.position(750,180)
        
    }

}