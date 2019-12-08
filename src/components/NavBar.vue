<template>
	<div>
	<nav class="navbar is-light" >
		<p class="center title has-text-centered">
			The Dungeon
		</p>
	</nav>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NavVar extends Vue {

	icon: 'moon'|'sun' = 'moon';

	switchTheme(): void {
		if(this.icon === 'moon')
			this.icon = 'sun';
		else
			this.icon = 'moon';
	}

}
</script>

<style scoped>
.center {
	flex-grow: 1;
}
</style>