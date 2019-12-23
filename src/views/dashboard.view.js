class DashboardView {
  static render() {
    const html = `
      <div class="container">
        <div class="row mt-3">
          <main-app></main-app>
        </div>
      </div>`;

    document.getElementsByTagName('router-outlet')[0].innerHTML = html;
  }
}

export default DashboardView;
