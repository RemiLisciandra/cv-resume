<template>
  <div class="w-full min-w-[600px]">
    <svg
      viewBox="0 0 1000 400"
      class="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Architecture data pipeline : API, Kafka, Staging, Airflow, DBT, DWH, DBT, Data Mart, Jedox"
    >
      <defs>
        <filter
          id="particleGlow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="nodeShadow" x="-5%" y="-5%" width="110%" height="120%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="4"
            flood-color="#000"
            flood-opacity="0.3"
          />
        </filter>

        <!-- Particle motion paths -->
        <path id="flow-1" d="M 215 90 L 405 90" />
        <path id="flow-2" d="M 405 90 L 595 90" />
        <path id="flow-3" d="M 595 90 L 785 90" />
        <path id="flow-4" d="M 785 90 L 785 300" />
        <path id="flow-5" d="M 785 300 L 627 300" />
        <path id="flow-6" d="M 627 300 L 469 300" />
        <path id="flow-7" d="M 469 300 L 311 300" />
        <path id="flow-8" d="M 311 300 L 153 300" />
        <path id="flow-sched" d="M 785 125 L 469 265" />
      </defs>

      <!-- ===== CONNECTION LINES (Row 1 — Left to Right) ===== -->
      <line
        x1="285"
        y1="90"
        x2="335"
        y2="90"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-right"
      />
      <polygon points="330,86 338,90 330,94" fill="#475569" />

      <line
        x1="475"
        y1="90"
        x2="525"
        y2="90"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-right"
      />
      <polygon points="520,86 528,90 520,94" fill="#475569" />

      <line
        x1="665"
        y1="90"
        x2="715"
        y2="90"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-right"
      />
      <polygon points="710,86 718,90 710,94" fill="#475569" />

      <!-- ===== AIRFLOW → DBT #1 (vertical schedule) ===== -->
      <line
        x1="785"
        y1="125"
        x2="785"
        y2="265"
        stroke="#a78bfa"
        stroke-width="1.5"
        stroke-dasharray="4 3"
        class="dash-down"
        opacity="0.6"
      />
      <polygon points="781,260 785,268 789,260" fill="#a78bfa" opacity="0.6" />
      <text
        x="798"
        y="198"
        fill="#a78bfa"
        font-size="8"
        font-style="italic"
        font-family="system-ui, sans-serif"
        opacity="0.7"
      >
        schedules
      </text>

      <!-- ===== AIRFLOW → DBT #2 (diagonal schedule) ===== -->
      <line
        x1="785"
        y1="125"
        x2="469"
        y2="265"
        stroke="#a78bfa"
        stroke-width="1.5"
        stroke-dasharray="4 3"
        opacity="0.4"
      />
      <text
        x="645"
        y="182"
        fill="#a78bfa"
        font-size="8"
        font-style="italic"
        font-family="system-ui, sans-serif"
        opacity="0.7"
        transform="rotate(-24, 645, 182)"
      >
        schedules
      </text>

      <!-- ===== CONNECTION LINES (Row 2 — Right to Left) ===== -->
      <line
        x1="730"
        y1="300"
        x2="682"
        y2="300"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-left"
      />
      <polygon points="687,296 679,300 687,304" fill="#475569" />

      <line
        x1="572"
        y1="300"
        x2="524"
        y2="300"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-left"
      />
      <polygon points="529,296 521,300 529,304" fill="#475569" />

      <line
        x1="414"
        y1="300"
        x2="366"
        y2="300"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-left"
      />
      <polygon points="371,296 363,300 371,304" fill="#475569" />

      <line
        x1="256"
        y1="300"
        x2="208"
        y2="300"
        stroke="#475569"
        stroke-width="1.5"
        stroke-dasharray="6 4"
        class="dash-left"
      />
      <polygon points="213,296 205,300 213,304" fill="#475569" />

      <!-- ===== ANIMATED DATA PARTICLES ===== -->

      <!-- Flow 1: API → Kafka -->
      <circle r="4" fill="#38bdf8" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite">
          <mpath href="#flow-1" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#38bdf8" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.25s">
          <mpath href="#flow-1" />
        </animateMotion>
      </circle>

      <!-- Flow 2: Kafka → Staging -->
      <circle r="4" fill="#fb923c" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.4s">
          <mpath href="#flow-2" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#fb923c" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.65s">
          <mpath href="#flow-2" />
        </animateMotion>
      </circle>

      <!-- Flow 3: Staging → Airflow -->
      <circle r="4" fill="#2dd4bf" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s">
          <mpath href="#flow-3" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#2dd4bf" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.05s">
          <mpath href="#flow-3" />
        </animateMotion>
      </circle>

      <!-- Flow 4: Airflow → DBT#1 (vertical) -->
      <circle r="4" fill="#a78bfa" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="0.2s">
          <mpath href="#flow-4" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#a78bfa" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1.7s">
          <mpath href="#flow-4" />
        </animateMotion>
      </circle>

      <!-- Flow schedule: Airflow → DBT#2 (diagonal) -->
      <circle r="3" fill="#c4b5fd" opacity="0.6" filter="url(#particleGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
          <mpath href="#flow-sched" />
        </animateMotion>
      </circle>
      <circle r="2" fill="#c4b5fd" opacity="0.35" filter="url(#particleGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" begin="2.0s">
          <mpath href="#flow-sched" />
        </animateMotion>
      </circle>

      <!-- Flow 5: DBT#1 → DWH -->
      <circle r="4" fill="#f472b6" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.6s">
          <mpath href="#flow-5" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#f472b6" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.6s">
          <mpath href="#flow-5" />
        </animateMotion>
      </circle>

      <!-- Flow 6: DWH → DBT#2 -->
      <circle r="4" fill="#60a5fa" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.0s">
          <mpath href="#flow-6" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#60a5fa" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="2.0s">
          <mpath href="#flow-6" />
        </animateMotion>
      </circle>

      <!-- Flow 7: DBT#2 → Data Mart -->
      <circle r="4" fill="#818cf8" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.4s">
          <mpath href="#flow-7" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#818cf8" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="2.4s">
          <mpath href="#flow-7" />
        </animateMotion>
      </circle>

      <!-- Flow 8: Data Mart → Jedox -->
      <circle r="4" fill="#34d399" opacity="0.9" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.3s">
          <mpath href="#flow-8" />
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#34d399" opacity="0.5" filter="url(#particleGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.3s">
          <mpath href="#flow-8" />
        </animateMotion>
      </circle>

      <!-- ===== STAGE LABELS (Row 1) ===== -->
      <text
        x="215"
        y="42"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        SOURCE
      </text>
      <text
        x="405"
        y="42"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        INGESTION
      </text>
      <text
        x="595"
        y="42"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        STORAGE
      </text>
      <text
        x="785"
        y="42"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        ORCHESTRATION
      </text>

      <!-- ===== STAGE LABELS (Row 2) ===== -->
      <text
        x="785"
        y="360"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        TRANSFORM
      </text>
      <text
        x="627"
        y="360"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        WAREHOUSE
      </text>
      <text
        x="469"
        y="360"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        TRANSFORM
      </text>
      <text
        x="311"
        y="360"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        SERVING
      </text>
      <text
        x="153"
        y="360"
        text-anchor="middle"
        fill="#64748b"
        font-size="9"
        font-family="system-ui, sans-serif"
        letter-spacing="1.5"
      >
        ANALYTICS
      </text>

      <!-- ===== NODES (Row 1) ===== -->

      <!-- API Sources -->
      <g filter="url(#nodeShadow)">
        <rect
          x="145"
          y="55"
          width="140"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="145"
          y="55"
          width="140"
          height="3.5"
          rx="1.75"
          fill="#38bdf8"
        />
        <text
          x="215"
          y="88"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          API Sources
        </text>
        <text
          x="215"
          y="106"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          REST · HTTP
        </text>
      </g>

      <!-- Apache Kafka -->
      <g filter="url(#nodeShadow)">
        <rect
          x="335"
          y="55"
          width="140"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="335"
          y="55"
          width="140"
          height="3.5"
          rx="1.75"
          fill="#fb923c"
        />
        <text
          x="405"
          y="88"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          Apache Kafka
        </text>
        <text
          x="405"
          y="106"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Event Streaming
        </text>
      </g>

      <!-- Staging DB -->
      <g filter="url(#nodeShadow)">
        <rect
          x="525"
          y="55"
          width="140"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="525"
          y="55"
          width="140"
          height="3.5"
          rx="1.75"
          fill="#2dd4bf"
        />
        <text
          x="595"
          y="88"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          Staging DB
        </text>
        <text
          x="595"
          y="106"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Landing Zone
        </text>
      </g>

      <!-- Apache Airflow -->
      <g filter="url(#nodeShadow)">
        <rect
          x="715"
          y="55"
          width="140"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="715"
          y="55"
          width="140"
          height="3.5"
          rx="1.75"
          fill="#a78bfa"
        />
        <text
          x="785"
          y="88"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          Apache Airflow
        </text>
        <text
          x="785"
          y="106"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Python
        </text>
      </g>

      <!-- ===== NODES (Row 2 — 5 nodes, width 110) ===== -->

      <!-- DBT #1 (Staging → DWH) -->
      <g filter="url(#nodeShadow)">
        <rect
          x="730"
          y="265"
          width="110"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="730"
          y="265"
          width="110"
          height="3.5"
          rx="1.75"
          fill="#f472b6"
        />
        <text
          x="785"
          y="298"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          DBT
        </text>
        <text
          x="785"
          y="316"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="9"
          font-family="system-ui, sans-serif"
        >
          Staging → DWH
        </text>
      </g>

      <!-- DWH -->
      <g filter="url(#nodeShadow)">
        <rect
          x="572"
          y="265"
          width="110"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="572"
          y="265"
          width="110"
          height="3.5"
          rx="1.75"
          fill="#60a5fa"
        />
        <text
          x="627"
          y="298"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          DWH
        </text>
        <text
          x="627"
          y="316"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Data Warehouse
        </text>
      </g>

      <!-- DBT #2 (DWH → Mart) -->
      <g filter="url(#nodeShadow)">
        <rect
          x="414"
          y="265"
          width="110"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="414"
          y="265"
          width="110"
          height="3.5"
          rx="1.75"
          fill="#f472b6"
        />
        <text
          x="469"
          y="298"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          DBT
        </text>
        <text
          x="469"
          y="316"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="9"
          font-family="system-ui, sans-serif"
        >
          DWH → Mart
        </text>
      </g>

      <!-- Data Mart -->
      <g filter="url(#nodeShadow)">
        <rect
          x="256"
          y="265"
          width="110"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="256"
          y="265"
          width="110"
          height="3.5"
          rx="1.75"
          fill="#818cf8"
        />
        <text
          x="311"
          y="298"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          Data Mart
        </text>
        <text
          x="311"
          y="316"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Business Layer
        </text>
      </g>

      <!-- Jedox -->
      <g filter="url(#nodeShadow)">
        <rect
          x="98"
          y="265"
          width="110"
          height="70"
          rx="10"
          fill="#1e293b"
          stroke="#334155"
          stroke-width="1"
        />
        <rect
          x="98"
          y="265"
          width="110"
          height="3.5"
          rx="1.75"
          fill="#34d399"
        />
        <text
          x="153"
          y="298"
          text-anchor="middle"
          fill="white"
          font-size="13"
          font-weight="600"
          font-family="system-ui, sans-serif"
        >
          Jedox
        </text>
        <text
          x="153"
          y="316"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="system-ui, sans-serif"
        >
          Analytics & BI
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
@keyframes dash-flow-right {
  to {
    stroke-dashoffset: -20;
  }
}
@keyframes dash-flow-left {
  to {
    stroke-dashoffset: 20;
  }
}
@keyframes dash-flow-down {
  to {
    stroke-dashoffset: -20;
  }
}

.dash-right {
  animation: dash-flow-right 0.8s linear infinite;
}
.dash-left {
  animation: dash-flow-left 0.8s linear infinite;
}
.dash-down {
  animation: dash-flow-down 0.8s linear infinite;
}
</style>
