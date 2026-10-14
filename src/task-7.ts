const getMessage = (isOk: boolean): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(isOk ? "Everything good!" : "Everything bad(((((((((");
    }, 1000);
  });
};

getMessage(true).then((result: string) => console.log(result));
