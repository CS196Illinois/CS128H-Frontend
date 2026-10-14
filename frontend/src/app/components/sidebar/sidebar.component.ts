import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

const THEME_KEY = "cs128h-theme";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Input() open = false;
  @Output() navigate = new EventEmitter<void>();

  term = "Fall 2026";
  theme: "dark" | "light" = "dark";

  nav = [
    { path: "/", label: "Home" },
    { path: "/lectures", label: "Lectures" },
    { path: "/staff", label: "Staff" },
    { path: "/hof", label: "Hall of Fame" },
    { path: "/schedule", label: "Schedule" },
  ];

  ngOnInit() {
    const saved = localStorage.getItem(THEME_KEY);
    this.theme = saved === "light" ? "light" : "dark";
  }

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", this.theme);
    localStorage.setItem(THEME_KEY, this.theme);
  }
}
