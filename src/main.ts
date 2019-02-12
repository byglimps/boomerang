import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import * as gm from "gm";

type ImagePath = {
  location: string;
  name: string;
};

export class Boomerang {
  constructor(images: Array<string>) {
    this.mkdir();
    this.create(images);
  }

  public async create(images: Array<string>): Promise<Array<ImagePath>> {
    if (!images || images.length == 0) throw "No images passed";

    try {
      const imagePaths = await this.save(images);

      const dest = path.resolve(`tmp/${this.generateId()}.gif`);

      let gmi = gm("");

      // Make a shallow copy of array then map it in reverse order
      // slice(0) is cheap way of making a clone of original array
      imagePaths
        .slice(0)
        .reverse()
        .map(img => img && gmi.in(img.location));

      imagePaths.map(img => img && gmi.in(img.location));

      gmi
        .delay(15)
        .resize(1280, 720)
        .gravity("Center")
        .write(dest, async err => {
          if (err) throw err;

          await this.unlink(imagePaths);
          return;
        });

      return imagePaths;
    } catch (e) {
      return e;
    }
  }

  //   Generate unique id for file
  private generateId(): string {
    return crypto.randomBytes(16).toString("hex");
  }

  //   Create temp storage folder
  private mkdir(): void {
    const folder: string = path.resolve("tmp/");
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }

  //   Save files
  private async save(images: Array<string>): Promise<Array<ImagePath>> {
    let response: Array<ImagePath> = new Array();

    await Promise.all(
      images.map(pic => {
        const filename: string = this.generateId();

        const filepath: string = path.resolve(`tmp/${filename}.jpg`);

        const base64 = pic.replace(/^data:image\/png;base64,/, "");

        fs.writeFileSync(filepath, base64, "base64");

        response.push({ location: filepath, name: filename });
      })
    );
    return response;
  }
  //   Remove files
  private async unlink(paths: Array<ImagePath>) {
    await Promise.all(paths.map(path => fs.unlinkSync(path.location)));
  }
}
