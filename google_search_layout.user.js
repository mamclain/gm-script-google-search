// ==UserScript==
// @name     Make Google Search look normal in Firefox
// @version  1
// @grant    None
// @include https://www.google.com/search*
// ==/UserScript==


// The catch tab needs to be offset to look correctly
var catch_tab_pad_size = "32px";

// Make the icon size smaller so it is not obnoxious
var icon_size = "10px";

// Currently the padding catch object is called yWc32e,
// this might change in the future but for now this works
var s_objects = document.getElementsByClassName('yWc32e');

// force the catch arrow down by the offset amount
for (var i = 0, len = s_objects.length; i < len; i++)
{

  s_objects[i].style["padding-top"] = catch_tab_pad_size;
}


// Currently the icon object is called xA33Gc,
// this might change in the future but for now this works
var s_objects = document.getElementsByClassName('xA33Gc');

// make the icon smaller, We could remove this, but im ok with it smaller
for (var i = 0, len = s_objects.length; i < len; i++)
{
  s_objects[i].style["width"] = icon_size;
  s_objects[i].style["height"] = icon_size;
}

// At this point we need to invert the div and the H3 object to make things appear normally


// serach results are R, find them all
var r_objects = document.getElementsByClassName('r');

// cycle thru each R
for (var x = 0, len1 = r_objects.length; x < len1; x++)
{
  	// what we care about is in a A tag
    var a_objects = r_objects[x].getElementsByTagName("a")

    // cycle thru every a
    for (var y = 0, len2 = a_objects.length; y < len2; y++)
		{
      // the cached button is busted in there layout atm, but lets skip if we find it.
      if(a_objects[y].innerHTML=="Cached")
      {
        continue;
      }

      // any a node without a div or a h3 is not what we want.
      if(a_objects[y].getElementsByTagName("div").length==0 || a_objects[y].getElementsByTagName("h3").length==0)
      {
        continue;
      }

      // at this point we have a good node, get the html for both the div and the h3.
      var local_div = a_objects[y].getElementsByTagName("div")[0].outerHTML;
      var local_h3 = a_objects[y].getElementsByTagName("h3")[0].outerHTML;

      // rewrite the html with div below h3
      a_objects[y].innerHTML = local_h3+"<br>"+local_div

			// if we find the node no need to keep looking for it...
      break
    }
}






