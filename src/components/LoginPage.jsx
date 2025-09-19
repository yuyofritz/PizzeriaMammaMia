function LoginPage() {
    return (
        <div className="card p-4 my-4">
            <h3 className="mb-3 text-center">Iniciar Sesión</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" placeholder="ejemplo@mail.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="********" />
                </div>
                <button type="submit" className="btn btn-success w-100">Entrar</button>
            </form>
        </div>
    )
}
export default LoginPage
