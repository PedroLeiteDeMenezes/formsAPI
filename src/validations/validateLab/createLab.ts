import Lab from "../../../src/models/lab";

export default class validateCreateLab {
  async validate(data: any): Promise<string[]> {
    const errors: string[] = [];

    if (!data.name || typeof data.name !== "string") {
      errors.push("Name is required and must be a string");
    }

    const labExists = await Lab.findOne({ where: { name: data.name } });
    if (labExists) {
      errors.push("A lab with this name already exists");
    }

    return errors;
  }
}
