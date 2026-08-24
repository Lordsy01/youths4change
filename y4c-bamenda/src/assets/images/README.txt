Drop your photo files in this folder (e.g. hero.jpg, empowerher-1.jpg).

Then in the relevant page file:
1. Import it at the top:
     import heroPhoto from '../assets/images/hero.jpg'
2. Replace the matching <ImagePlaceholder ... /> with:
     <img src={heroPhoto} alt="Describe the photo" className="photo" />

Every image spot in the code is marked with a comment like:
  {/* IMAGE SPOT: ... */}
so you can search the project for "IMAGE SPOT" to find every one.
