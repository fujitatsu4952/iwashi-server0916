export declare class Observer {
    private cbs;
    add(cb: () => (void | Promise<void>)): void;
    delete(cb: () => (void | Promise<void>)): void;
    emit(): void;
}
