<?php
if (isset($_POST['submit']) && ($_POST['lengte'] != NULL && $_POST['gewicht']) != NULL)
{
    $gewicht = $_POST['gewicht'];
    $lengte = $_POST['lengte'];
    $formule= ($gewicht/($lengte**2))*10000;
    echo "Je BMI is:  <b>$formule</b>";
}
elseif ($_POST['submit'] && ($_POST['lengte'] == NULL || $_POST['gewicht'] == NULL))
{
        echo "Vul een correcte waarde in";
}
else echo "Vul je gegevens in";
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <b>Gewicht </b>(kg) <input type="number" name="gewicht"><br>
    <b>Lengte &ensp;</b>(cm) <input type="number" name="lengte"><br>
    <input type="submit" name="submit" value="Bereken"><br>
</form>