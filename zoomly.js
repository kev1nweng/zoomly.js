export const zoomly = {
  scope: {
    sHeight: screen.height,
    height: window.innerHeight,
    ratio: window.devicePixelRatio,
  },
  get computed() {
    const sh = this.scope.sHeight * this.scope.ratio;
    const dh = this.scope.height * this.scope.ratio;
    return { sh, dh };
  },
  getRatio(k = 1) {
    return k * this.scope.ratio * (this.computed.dh / this.computed.sh);
  },
};
