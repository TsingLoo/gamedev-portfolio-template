export default class ProjectData {
    id: string;
    name: string;
    iconUrl: string;
    accentColor: string;
    isWide: boolean;  // For applying .wide class
    isHigh: boolean;  // For applying .high class
    detailComponentName: string; // Name of the .vue file for this project's details

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        detailComponentName: string, // Replaces htmlDescription
        accentColor = "#222222DD",  // Default matches your original title-bar
        isHigh = false,
        isWide = false
    ) {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
        this.detailComponentName = detailComponentName;
        this.accentColor = accentColor;
        this.isHigh = isHigh;
        this.isWide = isWide;
    }
}