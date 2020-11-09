export class Observer {
    private cbs: (() => (void | Promise<void>))[] = [];
    public add(cb: () => (void | Promise<void>)) {
        this.cbs.push(cb);
    }
    public delete(cb: () => (void | Promise<void>)) {
        this.cbs = this.cbs.filter((fn) => fn !== cb);
    }
    public emit() {
        this.cbs.forEach(async (cb) => {
            await cb();
        });
    }
}
