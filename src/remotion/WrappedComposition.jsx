import React from 'react';
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig, spring } from 'remotion';

const Scene = ({ title, value, color, icon }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const scale = spring({
    frame,
    fps,
    config: { damping: 200, mass: 0.5 },
  });
  
  const textTranslation = interpolate(frame, [0, 30], [50, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: color, justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center' }}>
      <div style={{ opacity, transform: `scale(${scale})` }}>
        <div style={{ fontSize: 100, marginBottom: 20 }}>{icon}</div>
        <div style={{ transform: `translateY(${textTranslation}px)` }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>{title}</div>
            <div style={{ fontSize: 80 }}>{value}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const WrappedComposition = () => {
    const stats = [
        { title: "Live Playtime", value: "120h", color: "#ef4444", icon: "⏱️" },
        { title: "Attendees", value: "1,500+", color: "#22c55e", icon: "👥" },
        { title: "NCSP Contestants", value: "300", color: "#3b82f6", icon: "🏆" },
        { title: "Medals Given", value: "50", color: "#eab308", icon: "🥇" },
        { title: "Thank You!", value: "See you next year!", color: "#a855f7", icon: "👋" }
    ];

    const durationInFrames = 90; // 3 seconds per slide

    return (
        <AbsoluteFill>
            {stats.map((stat, index) => (
                <Sequence key={index} from={index * durationInFrames} durationInFrames={durationInFrames}>
                    <Scene {...stat} />
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
