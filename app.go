package main

import (
    "context"
    "fmt"
)

// App struct
type App struct {
    ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
    return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (app *App) startup(ctx context.Context) {
    app.ctx = ctx
}

// Greet returns a greeting for the given name
func (app *App) Greet(name string) string {
    return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (app *App) Hello(name string) string {
    return name
}
