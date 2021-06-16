const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //     console.log(numberTemp);
    const tempSelected = document.getAnimations('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex];
    console.log(valueTemp);
}