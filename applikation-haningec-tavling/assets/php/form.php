<?php
    //Name
    @$Name = $_POST['real_name'];
    //Age
    @$Age = $_POST['age'];
    //Adress
    @$Adress = $_POST['adress'];
    //Postadress
    @$Post_Adress = $_POST['post_adress'];
    //Phone
    @$Phone = $_POST['phone'];
    //Email
    @$Email = $_POST['email'];
    //Email
    @$Deltavling = $_POST['deltavling'];
    //Postadress
    @$Message = $_POST['message'];

    //Bot-test
    @$human = $_POST['human'];

    //$message = $_POST['message'];
    $from = 'From: Haninge Centrum - SuperShopper'; 
    //$to = 'birk@solenberg.org';
    $to = 'birk@solenberg.org';

    $my_array = array($Name, $Age, $Adress, $Post_adress, $Phone, $Email, $Deltavling, $Message);
    $topics = array("Namn: ", "Ålder: ", "Adress: ", "Post Adress: ", "Telefonnummer: ", "Email: ", "Deltävling: ", "Meddelande: ");

    $Apply = "<html><meta charset='UTF-8'><body>";

    $headers = "From:" .  $Email . "\r\n";
    $headers .= "Reply-To:".  $Email . "\r\n";
    $headers .= "CC: Haninge@Centrum.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			
   if ($_POST['submit'] && $human == '4') 
   {				 
        if (mail ($to,"Haninge-Centrum!", String_Adder($Apply, $my_array, $topics), $headers)) 
        { 
	        echo '<p>Du är nu med och tävlar i deltävlingen!</p>';
        }

        else
          { 
	        echo '<p>Någonting gick fel, testa gärna igen</p>'; 
	      } 
   }
     
        else if ($_POST['submit'] && $human != '4') 
        {
	      echo '<p>Du svarade fel på frågan.</p>';
        }

    function String_Adder($String, $Array, $topics)
    {
      $i = 0;
      $Array_Length = count($Array);
      while ($Array_Length > 0)
      {
        $String .= "<p>" . $topics[$i] . $Array[$i] . "</p>";
        $Array_Length -= 1;
        $i++;
      }
      //echo $String;
      $String .= "</body></html>";
      return $String;
    }  
?>