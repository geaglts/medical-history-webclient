function CFormControl(fd: typeof FormData) {
  return class FormControl<T> extends fd {
    constructor(form: HTMLFormElement) {
      super(form);
    }

    get data() {
      const values = {};
      const keys = this.keys();
      for (let key of keys) {
        const value = this.get(key) as string;
        if (value.length > 0) {
          values[key] = value;
        }
      }
      return values as T;
    }
  };
}
export default CFormControl;
