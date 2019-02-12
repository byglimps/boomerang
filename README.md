![gh_banner](https://user-images.githubusercontent.com/21694364/52664479-22e83380-2ed7-11e9-814c-0775ac91062e.jpg)

This library was built to generate a series of __Boomerang's__ from a given array of _base64_ images. This service handles saving the images, manipulating the images and returng a gif with the boomerang. Inspired by [Instagram](https://www.instagram.com/p/BT2jZ_9lCTf/) and their 10 photo boomerang's along with [phhhoto
's](https://hypno.com/) experimental camera platform. This library aims to provide funfun stories for the __Glimps__ photobooth platform and run along the [tiler](https://github.com/byglimps/tiler) service _byglimps_.

## Getting started
```javascript
import { Boomerang } from "boomerang-lib";

// receives an array of base64 images.
const story = new Boomerang(base64Images);
```

__returns__
```json
{ "story": "/path/to/your/boomerang" }
```

### Issues
- Finalize package creation through npm.
