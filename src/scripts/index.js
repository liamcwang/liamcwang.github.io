function PageSizeCorrection() 
{
    // let profiles = document.getElementsByClassName("container-profile");
    // If page is a certain width height
    // for (let i = 0; i < profiles.length; i++) {
    //     let currProfile = profiles[i];
    //     currProfile.style.width = "256px";
    //     currProfile.style.height = "256px";
    // }
    
    // let intro = document.getElementById("container-intro");
    // intro.style.display = "flex";
    // intro.style.marginLeft = "1in";
    // intro.style.marginRight = "1in";

    // let containers = document.getElementsByClassName("container");
    // for (let i = 0; i < containers.length; i++) {
    //     let currContainer = containers[i];
    //     let pTags = currContainer.getElementsByTagName("p");
    //     for (let j = 0; j < pTags.length; j++) {
    //         let currTag = pTags[j];
    //         currTag.style.marginLeft = "1in";
    //         currTag.style.marginRight = "1in";
    //     };

    //     let liTags = currContainer.getElementsByTagName("li");
    //     for (let j = 0; j < liTags.length; j++) {
    //         let currTag = liTags[j];
    //         currTag.style.marginLeft = "1in";
    //         currTag.style.marginRight = "1in";
    //     };
    // };
}


window.onpagereveal = function() 
{
    PageSizeCorrection();
};

window.onresize = function() 
{
    PageSizeCorrection();
};