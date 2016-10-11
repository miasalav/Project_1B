
 function Job(field,position) {
    this.field = field;
    this.position = position;
};

Job.prototype.jobName = function() {
    var result = return this.field + " " + this.position;
    document.write(result);
};

var job1 = new Job('tech', 'web dev');



/*
$('p').on('click', function(){
    $(this).html('<h1>wut<h1>');

});

/*
$('p').on('click', function(){
    $('div').slideUp("slow");
});
*/