![gh_banner_2](https://user-images.githubusercontent.com/21694364/52668329-4912d100-2ee1-11e9-9c44-a51fc210f366.jpg)
This library was built to generate a series of __Boomerang's__ from a given array of _base64_ images. This service handles saving the images, manipulating the images and returning a gif with the boomerang. Inspired by [Instagram](https://www.instagram.com/p/BT2jZ_9lCTf/) and their 10 photo boomerang's along with [phhhoto
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


## Encoding images to base64
```javascript
import fs from "fs";
import path from "path"

function base64_encode(filename) {
  const filepath = path.resolve(`images/${filename}`);

  const bitmap = fs.readFileSync(filepath);

  return new Buffer.from(bitmap).toString("base64");
}

```

### Issues
- Finalize package creation through npm.
