Name_Of_the_student_array= [];
function submit()
{
    var Display_Student_array = [];

    for(var i = 1; i <= 4; i++)
    {
        var Name_Of_the_student = document.getElementById("Name_Of_the_student_" + i).value;
        console.log(Name_Of_the_student);
        Name_Of_the_student_array.push(Name_Of_the_student);
    }
    console.log(Name_Of_the_student_array);
    var Length = Name_Of_the_student_array.length;
    console.log(length);

    for(var d = 0; d < length; d++) 
    {
        Display_Student_array.push("<h4> Name- " + Name_Of_the_student_array[d] + "</h4>");
        console.log(Display_Student_array);
    }

    console.log(Display_Student_array);
    document.getElementById("display_name_with_commas").innerHTML= Display_Student_array;
    var Remove = Display_Student_array.join[""];
    console.log(Remove);
    document.getElementById('display_name_without_commas').innerHTML = Remove;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
}
function getParagraph1();
{
    var inputs = [];
    for(var i = 1; i <=6 ; i++)
        {
            inputs.push(document.getElementById("para1_input_box" + i).value);
        }
        document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}
